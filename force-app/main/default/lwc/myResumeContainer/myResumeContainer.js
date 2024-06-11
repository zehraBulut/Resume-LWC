import { LightningElement } from 'lwc';
import * as RESUME_DATA from './myResumeContainerData'

export default class MyResumeContainer extends LightningElement {
    
    SOCIAL_LINKS = RESUME_DATA.SOCIAL_LINKS
    PROFILE_IMAGE = RESUME_DATA.PROFILE_IMAGE
    RESUME_DATA = RESUME_DATA
}