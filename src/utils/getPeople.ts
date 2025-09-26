import {
  getCombinedDetailsPerson,
  getPerson,
  getPersonTranslation,
} from "@api/index";
import { AUX_JOBS_KEYS, MEDIUM_POSTER } from "@utils/consts";
import { getSafePosterUrl } from "@utils/images";

type KnownForDepartment = keyof typeof AUX_JOBS_KEYS;

const getPersonData = async (id: number | string) => {
  const [combined, person, translations] = await Promise.all([
    getCombinedDetailsPerson(id),
    getPerson(id),
    getPersonTranslation(id)
  ]);

  const details = { ...person };
  
  if (!details.biography) {
    const englishTranslation = translations?.translations?.find(
      (item: Translation) => item.name === "English"
    )?.data?.biography;
    
    if (englishTranslation) {
      details.biography = englishTranslation;
    }
  }

  const jobs = combined?.crew?.reduce((acc: Record<string, CrewMember[]>, curr: CrewMember) => {
    if (!curr.job) return acc;
    acc[curr.job] = [...(acc[curr.job] || []), curr];
    return acc;
  }, {} as Record<string, CrewMember[]>);

  if (combined.cast?.length) {
    jobs["Acting"] = combined.cast;
  }

  const allCombined = [...(combined.cast || []), ...(combined.crew || [])];
  const uniqueCombined = Array.from(
    new Map(allCombined.map(item => [item.id, item])).values()
  );

  const knownForDepartment = AUX_JOBS_KEYS[details.known_for_department as KnownForDepartment];
  // const knownFor = uniqueCombined
  //   .filter((item) => item.job === knownForDepartment)
  //   .sort((a, b) => b.popularity - a.popularity);

  const knownFor = jobs?.[knownForDepartment]?.sort((a: Member, b: Member) => b.popularity - a.popularity);

  return { details, jobs, knownFor };
};

export const getPeople = async (id: string) => {
    const { details, jobs, knownFor } = await getPersonData(id);

    const jobKeys = Object.keys(jobs || {});
    if (details) {
      const knownForKey = AUX_JOBS_KEYS[details.known_for_department as KnownForDepartment] ||
                        details.known_for_department;
      const index = jobKeys.indexOf(knownForKey);
      if (index > -1) {
        jobKeys.splice(index, 1);
        jobKeys.unshift(knownForKey);
      }
    }
    
    const profilePath = getSafePosterUrl(details?.profile_path, MEDIUM_POSTER);
    return { details, jobs, jobKeys, knownFor, profilePath };
}