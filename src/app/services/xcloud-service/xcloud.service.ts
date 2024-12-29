import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XcloudService {
  public showCreateBlueprintModal = new BehaviorSubject(false);
  public showBlueprintListModal = new BehaviorSubject(false);
  public selectedPlugins = new BehaviorSubject<any>([]);

  public blueprints = new BehaviorSubject<any>([
    {
      id: 1,
      name: 'A Blueprint',
      isDefault: true,
      plugins: [
        {
          id: 2,
          name: 'B Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.2,
          installs: '3M',
        },
        {
          id: 4,
          name: 'D Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 6,
          name: 'F Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 8,
          name: 'H Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
      ],
    },
    {
      id: 2,
      name: 'A Blueprint',
      isDefault: false,
      plugins: [
        {
          id: 2,
          name: 'B Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.2,
          installs: '3M',
        },
        {
          id: 4,
          name: 'D Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 6,
          name: 'F Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 8,
          name: 'H Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
      ],
    },
    {
      id: 3,
      name: 'A Blueprint',
      isDefault: false,
      plugins: [
        {
          id: 2,
          name: 'B Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.2,
          installs: '3M',
        },
        {
          id: 4,
          name: 'D Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 6,
          name: 'F Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 8,
          name: 'H Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
      ],
    },
    {
      id: 4,
      name: 'A Blueprint',
      isDefault: false,
      plugins: [
        {
          id: 2,
          name: 'B Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.2,
          installs: '3M',
        },
        {
          id: 4,
          name: 'D Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 6,
          name: 'F Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 8,
          name: 'H Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
      ],
    },
    {
      id: 5,
      name: 'A Blueprint',
      isDefault: false,
      plugins: [
        {
          id: 2,
          name: 'B Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.2,
          installs: '3M',
        },
        {
          id: 4,
          name: 'D Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 6,
          name: 'F Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
        {
          id: 8,
          name: 'H Plugin',
          description:
            'Have an existing website already? Select this option to Have',
          rating: 4.8,
          installs: '7M',
        },
      ],
    },
  ]);

  public selectedBlueprint = new BehaviorSubject<any>(
    this.blueprints.value.find((blueprint: any) => blueprint.isDefault) || {}
  );

  public plugins = [
    {
      id: 1,
      name: 'A Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.5,
      installs: '6M',
    },
    {
      id: 2,
      name: 'B Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.2,
      installs: '3M',
    },
    {
      id: 3,
      name: 'C Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
    {
      id: 4,
      name: 'D Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
    {
      id: 5,
      name: 'E Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
    {
      id: 6,
      name: 'F Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
    {
      id: 7,
      name: 'G Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
    {
      id: 8,
      name: 'H Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
    {
      id: 9,
      name: 'I Plugin',
      description:
        'Have an existing website already? Select this option to Have',
      rating: 4.8,
      installs: '7M',
    },
  ];

  public colorMap: { [key: string]: { bg: string; text: string } } = {
    A: { bg: '#CCE6FF', text: '#6C90B4' },
    B: { bg: '#FFE2A4', text: '#CAA452' },
    C: { bg: '#FFC4C4', text: '#EC6F6F' },
    D: { bg: '#80B7FF', text: '#3784E8' },
    E: { bg: '#AFB6E5', text: '#707CCC' },
    F: { bg: '#F4ACC8', text: '#E5699A' },
    G: { bg: '#4CD9ED', text: '#1AA9BE' },
    H: { bg: '#FFEDCD', text: '#EDBB63' },
    I: { bg: '#CCE6FF', text: '#6C90B4' },
    J: { bg: '#FFC4C4', text: '#EC6F6F' },
    K: { bg: '#80B7FF', text: '#3784E8' },
    L: { bg: '#AFB6E5', text: '#707CCC' },
    M: { bg: '#F4ACC8', text: '#E5699A' },
    N: { bg: '#4CD9ED', text: '#1AA9BE' },
    O: { bg: '#FFEDCD', text: '#EDBB63' },
    P: { bg: '#CCE6FF', text: '#6C90B4' },
    Q: { bg: '#AFB6E5', text: '#707CCC' },
    R: { bg: '#80B7FF', text: '#3784E8' },
    S: { bg: '#FFC4C4', text: '#EC6F6F' },
    T: { bg: '#4CD9ED', text: '#1AA9BE' },
    U: { bg: '#FFEDCD', text: '#EDBB63' },
    V: { bg: '#CCE6FF', text: '#6C90B4' },
    W: { bg: '#F4ACC8', text: '#E5699A' },
    X: { bg: '#80B7FF', text: '#3784E8' },
    Y: { bg: '#AFB6E5', text: '#707CCC' },
    Z: { bg: '#FFC4C4', text: '#EC6F6F' },
  };

  public getColorForPlugin(pluginName: string) {
    const firstLetter = pluginName[0].toUpperCase(); // Get the first letter and make it uppercase
    return this.colorMap[firstLetter] || { bg: '#FFFFFF', text: '#000000' }; // Default to white/black if no match
  }

  constructor() {}
}
