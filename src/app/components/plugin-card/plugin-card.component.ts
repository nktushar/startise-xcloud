import { Component, inject, Input, input, OnInit } from '@angular/core';
import { on } from 'events';
import { XcloudService } from '../../services/xcloud-service/xcloud.service';
import { log } from 'console';

@Component({
  selector: 'app-plugin-card',
  imports: [],
  templateUrl: './plugin-card.component.html',
  styleUrl: './plugin-card.component.scss',
  standalone: true,
})
export class PluginCardComponent implements OnInit {
  xcloudService = inject(XcloudService);

  @Input() plugin: any;
  isSelected: boolean = false;

  constructor() {}
  ngOnInit() {
    this.xcloudService.selectedPlugins.subscribe((plugins) => {
      this.isSelected = plugins.some((p: any) => p.id === this.plugin.id);
    });
  }
}
