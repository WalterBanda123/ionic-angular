import { InjectionToken } from "@angular/core";
import { AppConfig } from "./../interface/AppConfig.interface";
import { environment } from "src/environments/environment";

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('serverurl');
export const APP_CONFIG: AppConfig = {
  serverUrl: environment.server_url
}
