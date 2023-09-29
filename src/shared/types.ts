export enum SelectedPage {
  Home = "home",
  Abouts = "abouts",
  Classes = "classes",
  Contacts = "contacts"
}


export interface AboutType {
  icon: JSX.Element,
  title: string,
  description: string
}