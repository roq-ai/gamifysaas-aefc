import { StudentCourseInterface } from 'interfaces/student-course';
import { UserInterface } from 'interfaces/user';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  user_id: string;
  course_id: string;
  progress?: number;
  created_at?: any;
  updated_at?: any;
  student_course?: StudentCourseInterface[];
  user?: UserInterface;
  course?: CourseInterface;
  _count?: {
    student_course?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  course_id?: string;
}
