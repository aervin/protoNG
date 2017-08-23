import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppConfig } from './feature.constants'
import { USTRouterConfig } from './feature.routes'
import { RouterModule } from '@angular/router'
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store'
import { IAppState, INITIAL_STATE } from './feature.state'
import { featureReducer } from './feature.reducer'
import { FeatureComponent } from './feature.component'

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    /**
     * Uncomment to config routes for feature
     * RouterModule.forRoot(USTRouterConfig)
     */
    NgReduxModule
  ],
  providers: [AppConfig],
  bootstrap: [FeatureComponent]
})
export class FeatureModule {
  constructor(private _ngRedux: NgRedux<IAppState>, private NgReduxDevTools: DevToolsExtension) {
    this._ngRedux.configureStore(
      featureReducer,
      INITIAL_STATE,
      [],
      [NgReduxDevTools.enhancer()]
    )
  }
}
