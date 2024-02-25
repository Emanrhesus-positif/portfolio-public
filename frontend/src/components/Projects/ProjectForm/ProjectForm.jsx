
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useFilePreview } from '../../../lib/customHooks';
import styles from './ProjectForm.module.scss';
import { updateProject, addProject } from '../../../lib/common';

export const ProjectForm = ({ project, validate }) => {

  const navigate = useNavigate();
  const {
    register, watch, formState, handleSubmit, reset,
  } = useForm({
    defaultValues: useMemo(() => ({
      title: project?.title,
      description: project?.description,
      gitHubUrl: project?.gitHubUrl,
    }), [project]),
  });

  useEffect(() => {
    reset(project);
  }, [project]);

  const file = watch(['file']);
  const [filePreview] = useFilePreview(file);
  const onSubmit = async (data) => {
    // When we create a new project
    if (!project) {
      if (!data.file[0]) {
        alert('Vous devez ajouter une image');
      }
      const newProject = await addProject(data);
      if (!newProject.error) {
        validate(true);
      } else {
        alert(newProject.message);
      }
    } else {
      const updatedProject = await updateProject(data, data.id);
      if (!updatedProject.error) {
        navigate('/');
      } else {
        alert(updatedProject.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">
        <p>Titre du site</p>
        <input type="text" id="title" {...register('title')}/>
      </label>
      <label htmlFor="description">
        <p>Description</p>
        <textarea type="text" id="description" {...register('description')}/>
      </label>
      <label htmlFor="imageUrl" >
        <p>Image principale</p>
        <div className={styles.AddImage}>
          {filePreview || project?.imageUrl ? (
            <>
              <img src={filePreview ?? project?.imageUrl} alt="preview" />
              <p>Modifier</p>
            </>
          ) : (
            <>
              <p>Ajouter une image</p>
            </>
          )}

        </div>
        <input {...register('file')} type="file" id="file" />
      </label>
      <label htmlFor="gitHubUrl">
        <p>Lien github</p>
        <input type="text" id="gitHubUrl" {...register('gitHubUrl')} />
      </label>
      <button type="submit">Publier</button>
    </form>
  );
};