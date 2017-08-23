import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { IAppState, ISettlementsContractor } from './feature.state';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core'
import { Http, Response } from '@angular/http'
import { NgRedux, select } from '@angular-redux/store'
import { ACTION } from './feature.action'

const endpoint = `http://localhost:3000`

@Component({
  selector: 'feature',
  templateUrl: './feature.template.html',
  styleUrls: ['./feature.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class FeatureComponent implements OnInit, OnDestroy {

    @select(['settlements', 'contractors'])
    contractors: Observable<ISettlementsContractor[]>

    @select(['settlements', 'activeContractor'])
    activeContractor: Observable<number>
    activeContractorSubscription: Subscription;

    @select(['settlements', 'details'])
    constractorDetails: Observable<any>

    @select(['settlements', 'detailsLoading'])
    detailsLoading: Observable<boolean>

    @select(['settlements', 'details'])
    details: Observable<any>

    constructor(private Http: Http, private NgRedux: NgRedux<IAppState>) {}

    ngOnInit(): void {
        this.Http .get(`${endpoint}/contractors`)
                  .subscribe((response) => {
                      this.NgRedux.dispatch({
                          type: ACTION.SETTLEMENTS.RECEIVED_CONTRACTORS_DATA,
                          data: response.json()
                      })
                  }, (error) => {
                      console.log(`Problem fetching contractors data...`)
                      console.warn(error)
                  })
        this.activeContractorSubscription = this.activeContractor.subscribe((newId: number) => {
            if (newId >= 0) {
                this.NgRedux.dispatch({ type: ACTION.SETTLEMENTS.SETTLEMENTS_TOGGLE_DETAILS_LOADING })
                setTimeout(() => {
                    this.getContractorDetails(newId)
                        .subscribe((details) => {
                            this.NgRedux.dispatch({
                                type: ACTION.SETTLEMENTS.RECEIVED_CONTRACTOR_DETAILS,
                                data: details.json()
                            })
                        }, (error) => {
                            console.log(`Problem fetching contractor details...`)
                            console.warn(error)
                        }, () => {
                            this.NgRedux.dispatch({ type: ACTION.SETTLEMENTS.SETTLEMENTS_TOGGLE_DETAILS_LOADING })
                        })
                }, 500)
            }
        })
    }

    ngOnDestroy(): void {
        this.activeContractorSubscription.unsubscribe()
    }

    private getContractorDetails(id: number): Observable<Response> {
        return this.Http.get(`${endpoint}/contractorData/${id}`)
    }

    public setActiveContractor(id: number): void {
        this.NgRedux.dispatch({
            type: ACTION.SETTLEMENTS.SET_ACTIVE_CONTRACTOR,
            data: { id: id }
        })
    }
}
