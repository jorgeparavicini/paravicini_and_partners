export abstract class BaseComponent {
  abstract get siteIndex(): number;
  abstract get subSiteIndex(): number | null;
}
