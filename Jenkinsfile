#!/usr/bin/env groovy

/*
 * Jenkinsfile base para un proyecto AstroJS.
 * Pipeline mínimo para aprender cómo funciona Jenkins.
 *
 * Flujo: instalar → lint → build → docker build → docker run
 *
 * Requisitos previos:
 *   - Tener Docker instalado y corriendo
 *   - Tener Jenkins corriendo (local o en Docker)
 *   - Un proyecto AstroJS con package.json, Dockerfile y docker-compose.yaml
 */

pipeline {
    // "any" = ejecuta en cualquier agente disponible
    // En local, esto significa "en la misma máquina donde está Jenkins"
    agent any

    options {
        // Si tarda más de 30 minutos, se cancela
        timeout(time: 30, unit: 'MINUTES')
        // Solo guarda los últimos 5 builds (para no llenar disco)
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    environment {
        // Nombre del contenedor (coincide con docker-compose.yaml)
        APP_NAME = 'astrojs_lmdb'
        // Tag de la imagen Docker
        IMAGE_NAME = 'astro-lmdb:test'
        // Puerto donde se expone la app
        APP_PORT = '6543'
        // Puerto interno del contenedor (Astro usa 4321 por defecto)
        CONTAINER_PORT = '4321'
    }

    stages {
        // ---------------------------------------------------------------------
        // Instala las dependencias del proyecto
        // ---------------------------------------------------------------------
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // ---------------------------------------------------------------------
        // Build del proyecto Astro
        // Ejecuta "astro check" (validación de tipos) + "astro build" (genera los archivos)
        // ---------------------------------------------------------------------
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // ---------------------------------------------------------------------
        // Construye la imagen Docker usando el Dockerfile del proyecto
        // ---------------------------------------------------------------------
        stage('Build Docker image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        // ---------------------------------------------------------------------
        // Arranca el contenedor y expone la app en el puerto configurado
        // ---------------------------------------------------------------------
        stage('Run container') {
            steps {
                sh '''
                    docker rm -f ${APP_NAME} || true
                    docker run -d --name ${APP_NAME} -p ${APP_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}
                    echo "App running at http://localhost:${APP_PORT}"
                '''
            }
        }
    }

    // ---------------------------------------------------------------------
    // Acciones post-pipeline (siempre se ejecutan)
    // ---------------------------------------------------------------------
    post {
        // Limpia el contenedor siempre (éxito o fallo)
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
