import { ContentInterface } from 'interfaces/content';
import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EducationProviderInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  content?: ContentInterface[];
  course?: CourseInterface[];
  user?: UserInterface;
  _count?: {
    content?: number;
    course?: number;
  };
}

export interface EducationProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
