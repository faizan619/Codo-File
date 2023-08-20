// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
import { render,fireEvent, screen} from '@testing-library/react';
import Html from '../Components/Editor/Html.jsx';
import { MemoryRouter } from 'react-router-dom';
import JavaScript from '../Components/Editor/Javascript.jsx'
import Python from '../Components/Editor/Python.jsx'
import Image2Text from '../Components/Editor/Image2Text.jsx'
import Voice2Text from '../Components/Editor/Voice2Text.jsx'

describe("Html Component",()=>{
    test("Html Page is Rendering:",()=>{
        render(
            <MemoryRouter>
                <Html/>
            </MemoryRouter>
        );
    });
    test('Should update HTML code On Trigger :',async()=>{
        render(<MemoryRouter><Html/></MemoryRouter>);

        //Type HTML Code
        const htmlTextarea = screen.getByTestId('htmlTextarea')
        fireEvent.change(htmlTextarea, { target: { value: '<div>Hello, HTML!</div>' } });
        //Verify if the Html code has been updated
        expect(htmlTextarea.value).toBe('<div>Hello, HTML!</div>');
            const resultIframe = screen.getByTestId('result');
            const htmlcontent = resultIframe.contentDocument;
            expect(htmlcontent.body.innerHTML).toContain('Hello, HTML!');

            // const htmlContent = "Hello World"
            // expect(htmlContent).toContain('Hello World'); 
    });
    it('should update CSS code on trigger', () => {
        render(<MemoryRouter><Html/></MemoryRouter>)

        // Type CSS code
        const cssTextarea = screen.getByTestId('cssTextarea');
        fireEvent.change(cssTextarea, { target: { value: 'body { background-color: lightblue; }' } });
     
        // Verify if the CSS code has been updated
        expect(cssTextarea.value).toBe('body { background-color: lightblue; }');
    
        // Verify if the result iframe content has been updated with the CSS styling
        const resultIframe = screen.getByTestId('result');
        const resultDocument = resultIframe.contentDocument;
        expect(resultDocument.head.innerHTML).toContain(''); 
        
      });
      test('run button is Functional:',()=>{
        render(<MemoryRouter><Html/></MemoryRouter>)
        // Verify if the run button is present
        const runButton = screen.getByTestId('runButton');    
        // Click the run button
        fireEvent.click(runButton);
      })

});

describe("Javascript Component",()=>{
    test("Javascript Page is Rendering:",()=>{
        render(
        <MemoryRouter>
            <JavaScript/>
        </MemoryRouter>);
    });
    it('should execute and display console output :',()=>{
      render(<MemoryRouter><JavaScript /></MemoryRouter>);
      const codeTextarea = screen.getByTestId('jsTextarea');
      fireEvent.change(codeTextarea,{target:{value:'console.log("Test Output");'}});

      const runButton = screen.getByText('RUN');
      fireEvent.click(runButton);

      //Verify if the console. output contains the expected message
      const consoleOutput = screen.getByTestId('consoleOutput');
      expect(consoleOutput.textContent).toEqual('Test Output')
      // expect(consoleOutput.textContent).toContain('Test Output')
    }) 
    it('Should Clear Console output on trigger Clear button:',()=>{
      render(<MemoryRouter><JavaScript/></MemoryRouter>);
      const clearButton = screen.getByText("Clear");
      fireEvent.click(clearButton)
      //Verify if the console. output is clear
      const consoleOutput = screen.getByTestId('consoleOutput');
      expect(consoleOutput.textContent).toEqual('')
    })
    test('Should Copy Content to ClipBoard:',()=>{
      render(<MemoryRouter><JavaScript/></MemoryRouter>);

      const codeTextarea = screen.getByTestId('jsTextarea');
      fireEvent.change(codeTextarea,{target:{value:'console.log("Test Copy Content");'}});

      const copyButton = screen.getByAltText('CopyClip');
      fireEvent.click(copyButton);
    // Verify if the content has been copied to the clipboard
    const clipboardContent = window.clipboardData.getData('Text');
    expect(clipboardContent).toContain('Test Copy Content');
    })
    test('Should Download the Code:',()=>{
      render(<MemoryRouter><JavaScript/></MemoryRouter>);
      const codeTextarea = screen.getByTestId('jsTextarea');
      fireEvent.change(codeTextarea,{target:{value:'console.log("Test Copy Content");'}});

      const downloadButton = screen.getByAltText('DownLoadCode');
      fireEvent.click(downloadButton)
      // Verify if the download link has the correct attributes
      const downloadLink = screen.getByTestId('downloadLink');
      expect(downloadLink).toHaveAttribute('href', expect.stringContaining('CodoFile-'));
      expect(downloadLink).toHaveAttribute('download', expect.stringContaining('CodoFile-'));
    })
})
describe("Image2Text Component",()=>{
    test("Image2Text Page is Rendering:",()=>{
        render(
        <MemoryRouter>
            <Image2Text/>
        </MemoryRouter>);
    })
})
describe("Voice2Text Component",()=>{
  test("Voice2Text Page is Rendering:",()=>{
      render(
      <MemoryRouter>
          <Voice2Text/>
      </MemoryRouter>);
  });
})
describe("Python Component",()=>{
    test("Python Page is Rendering:",()=>{
        render( 
        <MemoryRouter>
            <Python/>
        </MemoryRouter>);
    });
    test('Should Update Code onChange',()=>{
      render(<MemoryRouter><Python/></MemoryRouter>);
      // Simulate user input in the code textarea
      const codeTextarea = screen.getByPlaceholderText('print("hello codoPlayers")');
      fireEvent.change(codeTextarea, { target: { value: 'print("Hello, Python!")' } });
      expect(codeTextarea.value).toBe('print("Hello, Python!")');
    })
})

// const countBtn = screen.getByRole('button',{
//     name:"Increment"
// });
// test("render the count of zero : ",()=>{
//     render(<Test/>);
//     const counting = screen.getByRole('heading');
//     expect(counting).toHaveTextContent("0");
// })

// test("render count of 1 on increment",async ()=>{
//     render(<Test/>);
//     let Incbutton=screen.getByRole('button',{
//         name:"Increment"
//     });
//     await user.click(Incbutton)
//     const countEle = screen.getByRole('heading');
//     expect(countEle).toHaveTextContent("1")
// })

// test("on tap button focus shifts : ",async ()=>{
//     render(<Test/>);
//     const amountInp = screen.getByRole('spinbutton')
//     const setbtn = screen.getByRole("button",{
//         name:"Set",
//     })
//     let doubleBtn = screen.getByRole('button',{
//         name:"Increment"
//     });
//     await user.tab();
//     expect(doubleBtn).toHaveFocus();
//     await user.tab();
//     expect(amountInp).toHaveFocus();
//     await user.tab();
//     expect(setbtn).toHaveFocus();
// });
// describe('first test', () => { 
//     test("regrex testing : ",()=>{
//         render(<Test/>);

//         //normal text matching query
//         // const textEle = screen.getByText("FaIzAn")

//         //regrex text matching query
//         // const textEle = screen.getByText(/faizan/i)     //substring match,ignore case
//         // const textEle = screen.getByText(/^faizan$/i)       //substring match,ignore case
//         const textEle = screen.getByText((content)=>content.startsWith("Fa"))       //not a case sensitive but found start letter
//         expect(textEle).toBeInTheDocument();
//     })
