export interface CityData {
  slug: string;          // URL slug: iptv-toronto
  name: string;          // Display name: Toronto
  province: string;      // Province: Ontario
  provinceCode: string;  // ON
  population: string;    // "2.9M+"
  isp: string[];         // Local ISPs to mention
  landmark: string;      // Used in content copy
  timezone: string;      // America/Toronto
}

export const cities: CityData[] = [
  {
    slug: "iptv-toronto",
    name: "Toronto",
    province: "Ontario",
    provinceCode: "ON",
    population: "2.9M+",
    isp: ["Bell Fibe", "Rogers Ignite", "Cogeco"],
    landmark: "the CN Tower",
    timezone: "America/Toronto",
  },
  {
    slug: "iptv-vancouver",
    name: "Vancouver",
    province: "British Columbia",
    provinceCode: "BC",
    population: "675K+",
    isp: ["Shaw", "Telus Optik", "Novus"],
    landmark: "Stanley Park",
    timezone: "America/Vancouver",
  },
  {
    slug: "iptv-montreal",
    name: "Montreal",
    province: "Quebec",
    provinceCode: "QC",
    population: "2.1M+",
    isp: ["Videotron", "Bell Fibe", "Fizz"],
    landmark: "Mount Royal",
    timezone: "America/Toronto",
  },
  {
    slug: "iptv-calgary",
    name: "Calgary",
    province: "Alberta",
    provinceCode: "AB",
    population: "1.3M+",
    isp: ["Shaw", "Telus", "Xplornet"],
    landmark: "the Calgary Tower",
    timezone: "America/Edmonton",
  },
  {
    slug: "iptv-ottawa",
    name: "Ottawa",
    province: "Ontario",
    provinceCode: "ON",
    population: "1M+",
    isp: ["Bell Fibe", "Rogers", "Distributel"],
    landmark: "Parliament Hill",
    timezone: "America/Toronto",
  },
  {
    slug: "iptv-edmonton",
    name: "Edmonton",
    province: "Alberta",
    provinceCode: "AB",
    population: "1M+",
    isp: ["Telus", "Shaw", "EPCOR"],
    landmark: "the River Valley",
    timezone: "America/Edmonton",
  },
  {
    slug: "iptv-winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    provinceCode: "MB",
    population: "780K+",
    isp: ["Shaw", "Bell MTS", "Xplornet"],
    landmark: "The Forks",
    timezone: "America/Winnipeg",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
