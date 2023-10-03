export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Contacts = "contacts"
}


export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}