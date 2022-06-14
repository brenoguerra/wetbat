import { Container, Content } from './styles'

export const Banner = () => {
  return (
    <Container> 
      <Content>
        <div className="text">
          <h1 className='text'>Welcome to your dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu neque lacinia lectus semper semper. <br/>Nam lectus risus, sodales in dolor at, sagittis fringilla est. Integer maximus elit a lectus porta, in lobortis <br/>nisi scelerisque. Quisque et feugiat ipsum, facilisis tempus nulla. Morbi iaculis risus in tellus interdum, id <br/>varius odio aliquet. Vivamus lacus mi, venenatis eget elit ut, sollicitudin commodo arcu. Proin lectus <br/>magna, malesuada eget sapien at, efficitur semper purus. Quisque nunc leo, pulvinar a volutpat id, cursus <br/>eu lectus. Ut dapibus, orci vel suscipit ullamcorper, massa tortor tempus purus, ac ultrices lectus mi ac <br/>dolor. Aliquam accumsan neque in libero interdum, nec fermentum felis venenatis. Donec at quam ac <br/>magna tempor malesuada.
          </p>
        </div>
        <h1 className='data'>
          <p><strong>101</strong> NEW LEADS</p>
          <p><strong>35</strong> QUOTES CREATED</p>
          <p><strong>40</strong> PENDING ORDERS</p>
        </h1>
      </Content>

    </Container>
  )
}