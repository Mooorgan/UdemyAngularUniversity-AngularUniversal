import { isPlatformServer } from '@angular/common';
import {
  Directive,
  Inject,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appShellNoRender]',
})
export class ShellNoRenderDirective {
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    // private platformId:PLATFORM_ID
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
