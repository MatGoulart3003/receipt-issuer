import { useForm } from 'react-hook-form';
import { PageScaffold } from '../components';
import ReactDatePicker from 'react-datepicker';
import { ptBR } from 'date-fns/locale/pt-BR';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ptBR', ptBR);
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { format } from 'date-fns';

interface FreeValueForm {
  issueDate: Date;
  noteNumber: string;
  name: string;
  cpfCnpj: string;
  street: string;
  number: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  stateRegistration: string;
  totalValue: string;
}

const stylesheet = {
  form: {
    container: 'flex flex-col gap-3 p-4',
    label: '',
    input: 'focus:border-blue-600 focus:ring-1 focus:ring-blue-600',
    datePicker:
      'w-[624px] focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-md border border-zinc-500',
    textarea: '',
    rightElement: 'w-[120px] h-full',
    error: '',
  },
};
export const FreeValueEmissor = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FreeValueForm>();
  const selectedDate = watch('issueDate') as Date;

  const onSubmit = (data: FreeValueForm) => {
    console.log(data);
  };

  return (
    <PageScaffold
      title='Emissor de valor Livre'
      description='Nesta página, você poderá emitir notas para serviços ou produtos que não estão vinculados ao valor de diárias.'
    >
      <form className={stylesheet.form.container}>
        <Text className='text-xl font-semibold self-center mt-4 mb-2'>
          DESTINATÁRIO
        </Text>
        <Flex className='gap-10'>
          <FormControl className='w-full'>
            <FormLabel className={stylesheet.form.label}>
              Data de emissão
            </FormLabel>
            <ReactDatePicker
              customInput={<Input className={stylesheet.form.datePicker} />}
              selected={selectedDate}
              onChange={(date: Date) =>
                setValue('issueDate', date, { shouldValidate: true })
              }
              dateFormat='dd/MM/yyyy'
              locale={'ptBR'}
              timeCaption='Horário'
              placeholderText={`${format(new Date(), 'dd/MM/yyyy')}`}
            />
            <FormErrorMessage>
              <Alert className={stylesheet.form.error} status='error'>
                <AlertIcon />
                {errors.issueDate?.message}
              </Alert>
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.issueDate}>
            <FormLabel className={stylesheet.form.label}>
              Numero da Nota
            </FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('noteNumber', {
                required: 'Requerido',
              })}
              placeholder='000828'
            />
            <FormErrorMessage>
              <Alert className={stylesheet.form.error} status='error'>
                <AlertIcon />
                {errors.issueDate?.message}
              </Alert>
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex className='gap-10'>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>
              Razão Social/ Nome
            </FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('name', {
                required: 'Requerido',
              })}
              placeholder='Mateus Pereira Goulart'
            />
          </FormControl>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>CNPJ/CPF</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('cpfCnpj', {
                required: 'Requerido',
              })}
              placeholder='120.711.306-93'
            />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel className={stylesheet.form.label}>Endereço</FormLabel>
          <Input
            className={stylesheet.form.input}
            {...register('street', {
              required: 'Requerido',
            })}
            placeholder='Rua Sete de Setembro'
          />
        </FormControl>
        <Flex className='gap-10'>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>Numero</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('number', {
                required: 'Requerido',
              })}
              placeholder='379'
            />
          </FormControl>

          <FormControl>
            <FormLabel className={stylesheet.form.label}>Bairro</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('neighborhood', {
                required: 'Requerido',
              })}
              placeholder='Centro'
            />
          </FormControl>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>CEP</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('zipCode', {
                required: 'Requerido',
              })}
              placeholder='37660-000'
            />
          </FormControl>
        </Flex>
        <Flex className='gap-10'>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>Cidade</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('city', {
                required: 'Requerido',
              })}
              placeholder='Paraisópolis'
            />
          </FormControl>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>UF</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('state', {
                required: 'Requerido',
              })}
              placeholder='MG'
            />
          </FormControl>
          <FormControl>
            <FormLabel className={stylesheet.form.label}>País</FormLabel>
            <Input
              className={stylesheet.form.input}
              {...register('country', {
                required: 'Requerido',
              })}
              placeholder='Brasil'
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel className={stylesheet.form.label}>
            Inscrição Estadual
          </FormLabel>
          <Input
            className={stylesheet.form.input}
            {...register('stateRegistration', {
              required: 'Requerido',
            })}
            placeholder='388.108.598.269'
          />
        </FormControl>
        <Text className='text-xl font-semibold self-center mt-4'>
          VALOR TOTAL
        </Text>
        <FormControl>
          <FormLabel className={stylesheet.form.label}>Valor Total</FormLabel>
          <Input
            className={stylesheet.form.input}
            {...register('totalValue', {
              required: 'Requerido',
            })}
            placeholder='1000'
          />
        </FormControl>
        <Button
          onClick={handleSubmit(onSubmit)}
          className='text-white bg-blue-600 hover:bg-blue-500'
        >
          Continuar
        </Button>
      </form>
    </PageScaffold>
  );
};
