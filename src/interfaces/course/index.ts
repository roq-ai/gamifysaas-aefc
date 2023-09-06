import { StudentInterface } from 'interfaces/student';
import { StudentCourseInterface } from 'interfaces/student-course';
import { EducationProviderInterface } from 'interfaces/education-provider';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  title: string;
  description?: string;
  provider_id: string;
  content_id: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  student_course?: StudentCourseInterface[];
  education_provider?: EducationProviderInterface;
  content?: ContentInterface;
  _count?: {
    student?: number;
    student_course?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  provider_id?: string;
  content_id?: string;
}
