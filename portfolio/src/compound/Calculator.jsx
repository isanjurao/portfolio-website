import "./calculator.css";


export default function Calculator() {
   
    
  return <div className="calculator">

    <div className="container">
        <h1>Calculator</h1>
       <div className="cal">
        <input type="text" name="output" id="screen"/>
        
        <table>
        <tbody>
        <tr>
            <td><button>(</button></td>
            <td><button>)</button></td>
            <td><button>C</button></td>
            <td><button>CE</button></td>
            
        </tr>
           
        <tr>
            <td><button>7</button></td>
            <td><button>8</button></td>
            <td><button>9</button></td>
            <td><button>*</button></td>
       </tr>

        <tr>
            <td><button>4</button></td>
            <td><button>5</button></td>
            <td><button>6</button></td>
            <td><button>-</button></td>
       </tr>
        <tr>
            <td><button>1</button></td>
            <td><button>2</button></td>
            <td><button>3</button></td>
            <td><button>+</button></td>
       </tr>
       <tr>
             <td><button>.</button></td>
             <td><button>0</button></td>
             <td><button>/</button></td>
             <td><button>=</button></td>
     </tr>
     </tbody>
        </table>
    </div>
   </div>
    </div>
}
