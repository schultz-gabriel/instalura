import React from 'react';
import { useRouter } from 'next/router';
import { Lottie } from '@crello/react-lottie';
import * as yup from 'yup';
import postService from '../../../services/post/PostService';
import useForm from '../../../infra/hooks/forms/useForm';
import PostEditorWrapper from './style/FormPostWrapper';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundations/layout/Box';
import Text from '../../foundations/Text';
import filtersList from './filters';
import FilterPreview from './style/filters';
import loadingAnimation from '../../../theme/animations/loading.json';
import doneAnimation from '../../../theme/animations/done.json';
import errorAnimation from '../../../theme/animations/error.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const postSchema = yup.object().shape({
  photoUrl: yup
    .string()
    .required('Usuario" é obrigatório')
    .matches(
      /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i,
      'Formato inválido',
    ),
  filter: yup
    .string(),
  description: yup
    .string()
    .required('A descrição não pode ficar em branco.')
    .min(8, 'Sua legenda precisa ter ao menos 8 caracteres'),
});

// eslint-disable-next-line react/prop-types
function FormPost({ onClose }) {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [postStatus, setPostStatus] = React.useState(formStates.DEFAULT);
  const [postStep, setPostStep] = React.useState(1);
  const [preview, setPreview] = React.useState('');
  const router = useRouter();
  const initialValues = {
    photoUrl: '',
    filter: '',
    description: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      setIsFormSubmited(true);
      setPostStatus(formStates.LOADING);
      postService.postPhoto({
        photoUrl: values.photoUrl,
        filter: values.filter,
        description: values.description,
      })
        .then((resposta) => {
          // VAI DAR MERDA ABAIXO?
          setIsFormSubmited(false);
          setPostStatus(formStates.DONE);
          console.log('resposta', resposta);
        })
        .catch((err) => {
          console.error(err);
          setPostStatus(formStates.ERROR);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
          setPostStatus(formStates.DEFAULT);
          router.push('/app/feed');
        });
    },
    async validateSchema(values) {
      return postSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <PostEditorWrapper>
      <PostEditorWrapper.Header>
        <Button
          variant="secondary.main"
          type="button"
          ghost
          onClick={() => { onClose(); }}
        >
          X
        </Button>
      </PostEditorWrapper.Header>
      <PostEditorWrapper.ImageField>
        <FilterPreview>
          <img
            className={`filter-${form.values.filter} selectedPic`}
            src={preview || '/images/noPreview.svg'}
            alt=""
          />
        </FilterPreview>
      </PostEditorWrapper.ImageField>
      <PostEditorWrapper.Footer>
        <form onSubmit={form.handleSubmit}>
          {postStep === 1
          && (
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box
                display="flex"
                width="100%"
                // justifyContent="space-between"
                alignItems="center"
                justifyContent="center"
                position="relative"
              >
                <TextField
                  placeholder="Url da imagem"
                  onChange={form.handleChange}
                  name="photoUrl"
                  value={form.values.photoUrl}
                  error={form.errors.photoUrl}
                  isTouched={form.touched.photoUrl}
                  margin="0"
                  onBlur={form.handleBlur}
                />
                <Button
                  variant="secondary.main"
                  disabled={form.errors.photoUrl}
                  onClick={() => setPreview(form.values.photoUrl)}
                  position="relative"
                  right="0"
                  type="button"
                >
                  =&gt;
                </Button>
              </Box>
              <Button
                variant="primary.main"
                disabled={!preview}
                onClick={() => setPostStep(2)}
                type="button"
                fullWidth
              >
                Avançar
              </Button>
            </Box>
          )}
          {postStep === 2
          && (
            <>
              <div className="carousel">
                {filtersList.map((item) => (
                  <div key={item.title}>
                    <Button
                      type="button"
                      value={item.title}
                      name="filter"
                      onClick={(event) => {
                        const button = event.target.closest('button');
                        const target = button;
                        form.handleChange({ target });
                      }}
                      flexDirection="column"
                      style={{ padding: '5px' }}
                    >
                      <FilterPreview>
                        <img
                          className={`filter-${item.title}`}
                          src={preview}
                          alt=""
                          style={{ height: '88px', width: '88px', objectFit: 'cover' }}
                        />
                      </FilterPreview>
                      <Text variant="paragraph2" color="tertiary.light">
                        {item.title}
                      </Text>
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                variant="primary.main"
                disabled={form.errors.photoUrl}
                onClick={() => setPostStep(3)}
                type="button"
                fullWidth
                margin="1rem 0 0 0"
              >
                Avançar
              </Button>
              <Button
                variant="secondary.main"
                disabled={form.errors.photoUrl}
                onClick={() => { onClose(); setPostStep(1); setPreview(undefined); }}
                style={{ padding: '0' }}
                type="button"
                fullWidth
                margin="0"
                ghost
              >
                cancelar
              </Button>
            </>
          )}
          {postStep === 3
          && (
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Text variant="paragraph2" color="tertiary.light" textAlign="center">
                Sua foto está linda! Agora, adicione uma legenda.
              </Text>
              <TextField
                placeholder="Descrição"
                onChange={form.handleChange}
                name="description"
                value={form.values.description}
                error={form.errors.description}
                isTouched={form.touched.description}
                margin="0"
                onBlur={form.handleBlur}
              />
              <Box>
                <Button
                  variant="primary.main"
                  disabled={form.errors.description}
                  onClick={() => {}}
                  fullWidth
                >
                  Postar
                </Button>
                <Button
                  variant="secondary.main"
                  onClick={() => { onClose(); setPostStep(1); setPreview(undefined); }}
                  // style={{ padding: '0' }}
                  type="button"
                  fullWidth
                  margin="0"
                  ghost
                >
                  cancelar
                </Button>
              </Box>
            </Box>
          )}
        </form>
      </PostEditorWrapper.Footer>
      {isFormSubmited && postStatus === formStates.DONE && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: doneAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmited && postStatus === formStates.ERROR && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmited && postStatus === formStates.LOADING && (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
    </PostEditorWrapper>
  );
}

// eslint-disable-next-line react/prop-types
export default function PostEditor({ propsDoModal, onClose }) {
  return (
    <Box
      position="relative"
      margin={{
        xs: '0 auto',
        md: 'auto',
      }}
      width={{
        xs: '100%',
        md: 'auto',
      }}
            // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <FormPost onClose={onClose} />
    </Box>

  );
}
