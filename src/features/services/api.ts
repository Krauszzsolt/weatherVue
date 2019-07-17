import Axios from "axios";
import { Clouds, Weather, List, Welcome } from '../models/weather.model';

const FIND_NAME_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const FIND_GROUP_URL = "http://api.openweathermap.org/data/2.5/find?q=london&cnt=10";
const API_URL = "http://api.openweathermap.org/data/2.5/";
const KEY_URL = "&APPID=57e71e29e268016d12932485490524a7";



export class Api {

    public static Cities = class {
        public static getCitiesData = (city: string) => {
            return Axios.get(FIND_NAME_URL + city + KEY_URL);

        };
        public static getCityGroupData = (lat: string,lon: string, cnt: string) => {
            return Axios.get(FIND_GROUP_URL + KEY_URL);
        }
    }



}

