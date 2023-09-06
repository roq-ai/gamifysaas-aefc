import axios from 'axios';
import queryString from 'query-string';
import { EducationProviderInterface, EducationProviderGetQueryInterface } from 'interfaces/education-provider';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEducationProviders = async (
  query?: EducationProviderGetQueryInterface,
): Promise<PaginatedInterface<EducationProviderInterface>> => {
  const response = await axios.get('/api/education-providers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEducationProvider = async (educationProvider: EducationProviderInterface) => {
  const response = await axios.post('/api/education-providers', educationProvider);
  return response.data;
};

export const updateEducationProviderById = async (id: string, educationProvider: EducationProviderInterface) => {
  const response = await axios.put(`/api/education-providers/${id}`, educationProvider);
  return response.data;
};

export const getEducationProviderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/education-providers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEducationProviderById = async (id: string) => {
  const response = await axios.delete(`/api/education-providers/${id}`);
  return response.data;
};
