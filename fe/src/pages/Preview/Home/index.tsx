import { useCallback, useState } from 'react'
import { 
  FaAngleDoubleRight, 
  FaRegClock,
  FaRegEnvelope,
  FaTelegramPlane,
  FaRegCommentAlt,
  FaChartLine,
  FaChartPie,
  FaHandsHelping,
} from 'react-icons/fa';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Banner } from "../../../components/Banner"
import { SectionBox } from "../../../components/SectionBox"
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Lead } from '../../../components/Lead';
import { Message } from '../../../components/Message';
import { Table } from '../../../components/Table';
import { DestinationsGraph } from '../../../components/DestinationsGraph';
import { Donut } from '../../../components/Chart/Donut';
import { Pie } from '../../../components/Chart/Pie';
import { Line } from '../../../components/Chart/Line';

import { Content, ChartContent } from "./styles"

interface QuickQuoteFormData {
  from: string
  destination: string
  depart_date: string
  reture_date: string
  people: number
  transportation: string
  name: string
}

const quickQuoteFormSchema = yup.object().shape({
  from: yup.string().required('From is required'),
  destination: yup.string().required('Destination is required'),
  depart_date: yup.string().required('Depart date is required'),
  reture_date: yup.string().required('Reture date is required'),
  people: yup.number().typeError('People must be number').required('People is required'),
  transportation: yup.string().required('Transportation is required'),
  name: yup.string().required('Name is required'),
})

export const Home = () => {
  const [erroredForm, setErroredForm] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(quickQuoteFormSchema)
  });
  const { errors } = formState;

  const tableData = Array(100).fill(0).map((_, i) => {
    return {
        show: {
        id: i,
        name: 'Katty Abcdefghgj',
        destination: 'Vancouver',
        price: '1000'
      }
    }
  })

  const handleQuickQuote: SubmitHandler<FieldValues> = useCallback(async (data, event) => {
    try {
      const quickQuoteData = data as QuickQuoteFormData;
      console.log(quickQuoteData);
      
      // submit
    } catch (error) {
      setErroredForm(true)
    }
  }, []);

  return (
    <>
      <Banner />

      <Content>
        <SectionBox isErrored={erroredForm} title="Quick quote" icon={FaAngleDoubleRight} style={{ gridArea: 'quick_quote' }}>
          <form onSubmit={handleSubmit(handleQuickQuote)} className='quick_quote'>
            <Input 
              placeholder='From' 
              error={errors.from}
              {...register('from')}
            />
            <Input 
              placeholder='Destination' 
              error={errors.destination}
              {...register('destination')}
            />
            <Input 
              placeholder='Depart date' 
              error={errors.depart_date}
              {...register('depart_date')}
            />
            <Input 
              placeholder='Reture date' 
              error={errors.reture_date}
              {...register('reture_date')}
            />
            <Input 
              placeholder='People' 
              error={errors.people}
              {...register('people')}
            />
            <Input 
              placeholder='Transportation' 
              error={errors.transportation}
              {...register('transportation')}
            />
            <Input 
              placeholder='Name' 
              error={errors.name}
              {...register('name')}
            />

            <Button type='submit'>Create a quote</Button>
          </form>
        </SectionBox>
        
        <SectionBox title="Pending quotes" icon={FaRegClock} style={{ gridArea: 'pending_quote' }}>
          <Table
            columns={[
              {
                Header: 'ID #',
                accessor: 'show.id'
              },
              {
                Header: 'Name',
                accessor: 'show.name'
              },
              {
                Header: 'Destination',
                accessor: 'show.destination',
              },
              {
                Header: 'Price',
                accessor: 'show.price',
                Cell: ({ cell: { value } }) => {
                  const price = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(value);

                  return (
                    <>
                      {`${price}`}
                    </>
                  )
                }
              }
            ]}
            data={tableData}
          />
        </SectionBox>
        
        <SectionBox title="New Leads" icon={FaRegEnvelope} style={{ gridArea: 'new_leads' }}>
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
          <Lead
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Jane Smith'
            message='Hey! I want to place my package'
            date={'13:40 PM'}
          />
        </SectionBox>
        
        <SectionBox className='responsive-disable' title="Popular destinations & packages" icon={FaTelegramPlane} style={{ gridArea: 'popular_destinations' }}>
          <DestinationsGraph />
        </SectionBox>
        
        <SectionBox title="Team chat" icon={FaRegCommentAlt} style={{ gridArea: 'team_chat' }}>
          <Message
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Josh Abdadacasas'
            message='Customer service available'
          />
          <Message
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Josh Abdadacasas'
            message='Customer service available'
          />
          <Message
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Josh Abdadacasas'
            message='Customer service available'
          />
          <Message
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Josh Abdadacasas'
            message='Customer service available'
          />
          <Message
            image_url='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            name='Josh Abdadacasas'
            message='Customer service available'
          />
        </SectionBox>
        
        <SectionBox title="Revenue" icon={FaChartLine} style={{ gridArea: 'revenue' }}>
          <ChartContent>
            <Line />
          </ChartContent>
        </SectionBox>
        
        <SectionBox title="Potential revenue" icon={FaChartPie} style={{ gridArea: 'potential_revenue' }}>
          <ChartContent>
            <Pie />
            <Pie />
            <Pie />
          </ChartContent>
        </SectionBox>
        
        <SectionBox title="Close ratios" icon={FaHandsHelping} style={{ gridArea: 'close_ratios' }}>
          <ChartContent>
            <Donut />
          </ChartContent>
        </SectionBox>

      </Content>
    </>
  )
}