import { environment } from '../../../environments/environment';

export class ApiConfig {
  readonly baseApiUrl: string = environment.mpbsApiServerUrl + '/mpbs/api';
}
