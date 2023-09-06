const mapping: Record<string, string> = {
  contents: 'content',
  courses: 'course',
  'education-providers': 'education_provider',
  students: 'student',
  'student-courses': 'student_course',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
