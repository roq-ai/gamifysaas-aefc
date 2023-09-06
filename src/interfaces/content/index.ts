import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { EducationProviderInterface } from 'interfaces/education-provider';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  description?: string;
  creator_id: string;
  provider_id: string;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  user?: UserInterface;
  education_provider?: EducationProviderInterface;
  _count?: {
    course?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  creator_id?: string;
  provider_id?: string;
}
