import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

function formatProjects(projectArray) {
  return projectArray.map((project) => {
    const newProject = { ...project };
    newProject.id = newProject._id;
    return newProject;
  });
}

export function storeInLocalStorage(token, userId) {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');
    const userId = getFromLocalStorage('userId');
    if (!token) {
      return defaultReturnObject;
    }
    return { authenticated: true, user: { userId, token } };
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}

export async function getProjects() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PROJECTS}`,
    });
    const projects = formatProjects(response.data);
    return projects;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProject(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PROJECTS}/${id}`,
    });
    const project = response.data;
    project.id = project._id;
    return project;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteProject(id) {
  try {
    await axios.delete(`${API_ROUTES.PROJECTS}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function addProject(data) {
  const userId = localStorage.getItem('userId');
  const project = {
    userId,
    title: data.title,
    description: data.description,
    gitHubUrl: data.gitHubUrl,
  };
  const bodyFormData = new FormData();
  bodyFormData.append('project', JSON.stringify(project));
  bodyFormData.append('image', data.file[0]);

  try {
    return await axios({
      method: 'post',
      url: `${API_ROUTES.PROJECTS}`,
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

export async function updateProject(data, id) {
  const userId = localStorage.getItem('userId');

  let newData;
  const project = {
    userId,
    title: data.title,
    description: data.description,
    gitHubUrl: data.gitHubUrl,
  };
  if (data.file[0]) {
    newData = new FormData();
    newData.append('project', JSON.stringify(project));
    newData.append('image', data.file[0]);
  } else {
    newData = { ...project };
  }

  try {
    const newProject = await axios({
      method: 'put',
      url: `${API_ROUTES.PROJECTS}/${id}`,
      data: newData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return newProject;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}
