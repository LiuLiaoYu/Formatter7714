import {
  Monograph,
  MonographContribution,
  Serial,
  SerialContribution,
  Patent,
  ElectronicResource,
  ReferenceType
} from './formatter7714-type'



const a: Monograph = {
  formatType: '专著',
  creator: '',
  title: '',
  additionalTitleInfo: '',
  referenceType: "M",
  eResourceCarrier: '',
  otherCreator: '',
  edition: '',
  publisherLocation: '',
  publisher: '',
  year: '',
  pages: '',
  referenceDate: '',
  url: '',
  doi: '',
}


const b: MonographContribution = {
  formatType: '专著',
  creator: '',
  title: '',
  referenceType: 'M',
  eResourceCarrier: '',
  otherCreator: '',
  sourceCreator: '',
  sourceTitle: '',
  sourceAdditionalTitleInfo: '',
  edition: '',
  publisherLocation: '',
  publisher: '',
  year: '',
  pages: '',
  referenceDate: '',
  url: '',
  doi: '',
}


const c: Serial = {
  formatType: '专著',
  creator: '',
  title: '',
  additionalTitleInfo: '',
  referenceType: 'M',
  eResourceCarrier: '',
  startYearVolumeIssue: '',
  endYearVolumeIssue: '',
  publisherLocation: '',
  publisher: '',
  year: '',
  referenceDate: '',
  url: '',
  doi: '',

}


const d: SerialContribution = {
  formatType: '专著',
  creator: '',
  title: '',
  referenceType: 'M',
  eResourceCarrier: '',
  sourceTitle: '',
  sourceAdditionalTitleInfo: '',
  yearVolumeIssuePage: '',
  referenceDate: '',
  url: '',
  doi: '',
}


const e: Patent = {
  formatType: '专著',
  creator: '',
  title: '',
  patentNumber: '',
  referenceType: 'M',
  eResourceCarrier: '',
  publicationDate: '',
  referenceDate: '',
  url: '',
  doi: '',
}


const f: ElectronicResource = {
  formatType: '专著',
  creator: '',
  title: '',
  additionalTitleInfo: '',
  referenceType: 'M',
  eResourceCarrier: '',
  publisherLocation: '',
  publisher: '',
  year: '',
  pages: '',
  modifiedDate: '',
  referenceDate: '',
  url: '',
  doi: '',
}