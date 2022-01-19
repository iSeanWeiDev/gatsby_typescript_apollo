interface IPlaceType {
  id: !string;
  name: !string;
  code: !string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface IGeoLocation {
  latitude: number;
  longitude: number;
}

interface IContactInfo {
  email: string;
  phone1: string;
  phone2: string;
  fax: string;
}

interface ILocationInfo {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

interface ISocialLinks {
  facebook: string;
  linkedin: string;
  youtube: string;
  twitter: string;
  instagram: string;
  vibo: string;
  airbnb: string;
}

interface ILanguage {
  id: !string;
  name: !string;
  local: !string;
  code: !string;
  createdAt: !string;
  updatedAt: string;
}

export interface IPlace {
  id: !string;
  name: !string;
  description: string;
  placeType: IPlaceType;
  logo: IAsset;
  website: string;
  hasVolunteer: boolean;
  canCertificate: boolean;
  canRental: boolean;
  geolocation: IGeoLocation;
  contactInfo: IContactInfo;
  locationInfo: ILocationInfo;
  socials: ISocialLinks;
  defaultLanguage: ILanguage;
  availableLanguages: ILanguage[];
  likes: number;
  childs: IPlace[];
  parent: IPlace;
  createdAt: string;
  updatedAt: string;
}

export interface IPlaceFilter {
  id: string | number;
  name: string;
  type: string;
  value?: string;
}
