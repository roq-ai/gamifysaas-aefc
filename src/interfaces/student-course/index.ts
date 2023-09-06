import { StudentInterface } from 'interfaces/student';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface StudentCourseInterface {
  id?: string;
  student_id: string;
  course_id: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface StudentCourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  course_id?: string;
}
