import { XcloudService } from './../../services/xcloud-service/xcloud.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PluginCardComponent } from '../plugin-card/plugin-card.component';
import { log } from 'console';

@Component({
  selector: 'app-create-blueprint-modal',
  imports: [PluginCardComponent],
  templateUrl: './create-blueprint-modal.component.html',
  styleUrl: './create-blueprint-modal.component.scss',
})
export class CreateBlueprintModalComponent implements OnInit, OnDestroy {
  xcloudService = inject(XcloudService);

  blueprintName: string = '';
  searchQuery: string = '';
  selectedLetter: string = '';
  selectedPlugins: any[] = [];
  hasError: boolean = false;
  pluginError: boolean = false;

  constructor() {}
  ngOnInit() {
    this.xcloudService.selectedPlugins.subscribe((plugins) => {
      this.selectedPlugins = plugins;
    });
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.blueprintName = inputElement.value;
    this.hasError = false;
  }

  closeModal() {
    this.xcloudService.showCreateBlueprintModal.next(false);
  }

  selectPlugin(plugin: any) {
    this.pluginError = false;
    const currentPlugins = this.xcloudService.selectedPlugins.getValue();
    const pluginIndex = currentPlugins.findIndex(
      (p: any) => p.id === plugin.id
    );

    if (pluginIndex > -1) {
      this.xcloudService.selectedPlugins.next([
        ...currentPlugins.slice(0, pluginIndex),
        ...currentPlugins.slice(pluginIndex + 1),
      ]);
    } else {
      this.xcloudService.selectedPlugins.next([...currentPlugins, plugin]);
    }
  }

  closeError() {
    this.hasError = false;
    this.pluginError = false;
  }

  saveBlueprint() {
    if (this.blueprintName === '') {
      this.hasError = true;
      return;
    }

    if (this.xcloudService.selectedPlugins.getValue().length === 0) {
      this.pluginError = true;
      return;
    }

    this.xcloudService.blueprints.next([
      ...this.xcloudService.blueprints.getValue(),
      {
        id: this.xcloudService.blueprints.getValue().length + 1,
        name: this.blueprintName,
        isDefault: false,
        plugins: this.selectedPlugins,
      },
    ]);

    this.xcloudService.showCreateBlueprintModal.next(false);
    this.xcloudService.showBlueprintListModal.next(true);
  }

  ngOnDestroy() {
    this.xcloudService.selectedPlugins.next([]);
  }
}
