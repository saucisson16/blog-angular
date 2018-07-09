import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    posts = [
        {
            title: 'Mon premier poste',
            content: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, ' +
            'vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon deuxième poste',
            content: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, ' +
            'vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Encore un poste',
            content: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, ' +
            'vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.',
            loveIts: 0,
            created_at: new Date()
        }
    ]
}