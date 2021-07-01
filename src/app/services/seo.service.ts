import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title?: string) {
    this.title.setTitle(title ?? 'Paravicini & Partners');
  }

  updateOgUrl(url?: string) {
    this.meta.updateTag({
      name: 'og:url',
      content: url ?? 'https://paravicini-partners.ch/',
    });
  }

  updateDescription(desc?: string) {
    this.meta.updateTag({
      name: 'description',
      content: desc ?? 'Paravicini & Partners',
    });
  }
}
