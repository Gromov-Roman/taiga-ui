import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService, TuiValidationError} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_DEFAULT_ERROR_MESSAGE, TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiModeVariants} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-error',
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    providers: [TuiDestroyService, MODE_PROVIDER],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiErrorComponent {
    @Input()
    @tuiDefaultProp()
    error: TuiValidationError | null = null;

    @HostBinding('attr.data-tui-host-mode')
    mode: TuiModeVariants | null = null;

    constructor(
        @Inject(TUI_MODE) mode$: Observable<TuiModeVariants | null>,
        @Inject(TUI_DEFAULT_ERROR_MESSAGE) readonly defauleErrorMessage: string,
    ) {
        mode$.subscribe(mode => {
            this.mode = mode;
        });
    }
}