import {Component} from 'react'

import {
  BackgroundContainer,
  Heading,
  ImageContainer,
  FormContainer,
  Input,
  Label,
  InputContainer,
  Select,
  Option,
  Button,
  HeadingForm,
  Content,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].displayText,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
  }

  onSubmitMeme = event => {
    event.preventDefault()
    this.setState(preVal => ({
      imageUrl: preVal.imageUrlInput,
      topText: preVal.topTextInput,
      bottomText: preVal.bottomTextInput,
      fontSize: preVal.fontSizeInput,
    }))
  }

  onChangImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeInput = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      imageUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state
    return (
      <BackgroundContainer>
        <Heading>Meme Generator</Heading>
        <ImageContainer data-testid="meme" image={imageUrl}>
          <Content size={fontSize}>{topText}</Content>
          <Content size={fontSize}>{bottomText}</Content>
        </ImageContainer>
        <FormContainer onSubmit={this.onSubmitMeme}>
          <HeadingForm>Meme Generator</HeadingForm>
          <InputContainer>
            <Label htmlFor="image-url">Image URL</Label>
            <Input
              placeholder="Enter the image url"
              onChange={this.onChangImageUrl}
              value={imageUrlInput}
              id="image-url"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="top-text">Top Text</Label>
            <Input
              placeholder="Enter the top text"
              onChange={this.onChangeTextInput}
              value={topTextInput}
              id="top-text"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="bottom-text">Bottom Text</Label>
            <Input
              placeholder="Enter the bottom text"
              onChange={this.onChangeBottomTextInput}
              value={bottomTextInput}
              id="bottom-text"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="select">Font Size</Label>
            <Select
              id="select"
              onChange={this.onChangeFontSizeInput}
              value={fontSizeInput}
            >
              {fontSizesOptionsList.map(eachItem => (
                <Option key={eachItem.optionId}>{eachItem.displayText}</Option>
              ))}
            </Select>
          </InputContainer>
          <Button>Generate</Button>
        </FormContainer>
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
