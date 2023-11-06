export type FormatType = '专著' | '专著析出文献' | '连续出版物' | '连续出版物析出文献' | '专利文献' | '电子资源'

export const enum ReferenceType {
  普通图书 = 'M',
  会议录 = 'C',
  汇编 = 'G',
  报纸 = 'N',
  期刊 = 'J',
  学位论文 = 'D',
  报告 = 'R',
  标准 = 'S',
  专利 = 'P',
  数据库 = 'DB',
  计算机程序 = 'CP',
  电子公告 = 'EB',
  档案 = 'A',
  舆图 = 'CM',
  数据集 = 'DS',
  其他 = 'Z',
}

export type ReferenceTypeString = 'M' | 'C' | 'G' | 'N' | 'J' | 'D' | 'R' | 'S' | 'P' | 'DB' | 'CP' | 'EB' | 'A' | 'CM' | 'DS' | 'Z'

export enum EResourceCarrier {
  磁带 = 'MT',
  磁盘 = 'DK',
  光盘 = 'CD',
  联机网络 = 'OL',
}

export type EResourceCarrierString = 'MT' | 'DK' | 'CD' | 'OL'

interface MetaSection {
  formatType: FormatType
}

interface CreatorSection {
  creator: string
}

type CreatorSectionWithOthers = CreatorSection & { otherCreator: string }

interface TitleSection {
  title: string
  // additionalTitleInfo?: string
  // patentNumber?: string
  referenceType: ReferenceType | ReferenceTypeString
  eResourceCarrier: EResourceCarrier | EResourceCarrierString | ''
}

type PatentTitleSection = TitleSection & { patentNumber?: string }
type TitleSectionWithAdditionalInfo = TitleSection & { additionalTitleInfo?: string }

interface PublicationSection {
  publisherLocation: string
  publisher: string
  year: string
  referenceDate: string
  // pages?: string
  // modifiedDate?: string
}

type PublicationSectionWithPages = PublicationSection & { pages: string }

type EResourcePublicationSection = PublicationSection & { pages: string; modifiedDate: string }

interface PatentPublicationSection {
  publicationDate: string
  referenceDate: string
}

interface SerialSpanSection {
  startYearVolumeIssue: string
  endYearVolumeIssue: string
}

interface SerialSourceSection {
  sourceTitle: string
  sourceAdditionalTitleInfo: string
  yearVolumeIssuePage: string
  referenceDate: string
}

interface MonographSourceSection {
  sourceCreator: string
  sourceTitle: string
  sourceAdditionalTitleInfo: string
}

interface EditionSection {
  edition: string
}

interface EResourceLocationSection {
  url: string
  doi: string
}

export type Monograph = MetaSection & CreatorSectionWithOthers & TitleSectionWithAdditionalInfo & EditionSection & PublicationSectionWithPages & EResourceLocationSection
export type MonographContribution = MetaSection & CreatorSectionWithOthers & TitleSection & MonographSourceSection & EditionSection & PublicationSectionWithPages & EResourceLocationSection
export type Serial = MetaSection & CreatorSection & TitleSectionWithAdditionalInfo & SerialSpanSection & PublicationSection & EResourceLocationSection
export type SerialContribution = MetaSection & CreatorSection & TitleSection & SerialSourceSection & EResourceLocationSection
export type Patent = MetaSection & CreatorSection & PatentTitleSection & PatentPublicationSection & EResourceLocationSection
export type ElectronicResource = MetaSection & CreatorSection & TitleSectionWithAdditionalInfo & EResourcePublicationSection & EResourceLocationSection
