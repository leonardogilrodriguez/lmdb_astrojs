#!/usr/bin/env groovy

/*
 * Jenkinsfile base para un proyecto AstroJS.
 * Pipeline mínimo para aprender cómo funciona Jenkins.
 *
 * Flujo: instalar → build → docker build → docker run
 *
 * Requisitos:
 *   - Jenkins con plugin "Docker Pipeline" instalado
 *   - Docker socket montado en Jenkins (-v /var/run/docker.sock:/var/run/docker.sock)
 */

pipeline {
    // No se define agente global, cada stage usa el suyo
    agent none

    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    environment {
        APP_NAME = 'astrojs_lmdb'
        IMAGE_NAME = 'astro-lmdb:test'
        APP_PORT = '6543'
        CONTAINER_PORT = '4321'
    }

    stages {
        // Usa un contenedor Node.js para instalar y build
        stage('Install dependencies') {
            agent { docker 'node:20-alpine' }
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            agent { docker 'node:20-alpine' }
            steps {
                sh 'npm run build'
            }
        }

        // Usa un contenedor con Docker CLI para construir la imagen
        stage('Build Docker image') {
            agent { docker 'docker:latest' }
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run container') {
            agent { docker 'docker:latest' }
            steps {
                sh '''
                    docker rm -f ${APP_NAME} || true
                    docker run -d --name ${APP_NAME} -p ${APP_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}
                    echo "App running at http://localhost:${APP_PORT}"
                '''
            }
        }
    }

    post {
        always {
            sh "docker rm -f ${APP_NAME} || true"
        }
        success {
            echo "Pipeline completed successfully! App was available at http://localhost:${APP_PORT}"
        }
        failure {
            echo "Pipeline failed! Check the console output for details."
        }
    }
}
