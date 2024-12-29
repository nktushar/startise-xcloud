import { XcloudService } from './../../services/xcloud-service/xcloud.service';
import { Component, inject, OnInit } from '@angular/core';
import { PluginCardComponent } from '../plugin-card/plugin-card.component';
import { log } from 'console';

@Component({
  selector: 'app-create-blueprint-modal',
  imports: [PluginCardComponent],
  templateUrl: './create-blueprint-modal.component.html',
  styleUrl: './create-blueprint-modal.component.scss',
})
export class CreateBlueprintModalComponent implements OnInit {
  xcloudService = inject(XcloudService);

  blueprintName: string = '';
  searchQuery: string = '';
  selectedLetter: string = '';
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedPlugins: any[] = [];

  constructor() {}
  ngOnInit() {
    this.xcloudService.selectedPlugins.subscribe((plugins) => {
      this.selectedPlugins = plugins;
    });
  }

  setBlueprintName(name: string | null) {
    this.blueprintName = name ?? '';
  }

  goToNextStep() {
    console.log('Next step:', this.blueprintName);
  }

  selectPlugin(plugin: any) {
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
}
