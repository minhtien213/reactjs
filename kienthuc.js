// REACTJS

//1. ReactElement: tạo ra react element
    //Create Syntax: React.createElement(type, props, children, n ) - từ n trở đi là children
        //vd có 1 component là Button:
            <Button {...props}> {children} </Button> //gọi component
                //props: phải nằm trong cặp < > của thẻ mở component
                //children: nó thường xuất hiện giữa thẻ mở và đóng của component(string, object, function...)
            function Button({props, children}){
                return //logic
            } //nhận đối số: props rồi đến children

    //vd: 
    const h1Element = React.createElement('h1',{
            className: 'h1Elm',
            id: 'h1Element',
            style: 'color: #ccc; font-size:20px'
        }, 'Hi, Guys!' )
    // type: tên thẻ html
    // props: object các thuộc tính củ thẻ - nếu không có attribute thì để null hoặc {} rổng
        React.createElement('li', null, 'ReactJs')
    // children: nội dung của thẻ(value hoặc element con) - cũng là 1 PROPS
        const ulElement = React.createElement('ul', null, 
            React.createElement('li', null, 'ReactJs'), //children là thẻ con
            React.createElement('li', null, 'Javascript') //children là thẻ con
        )
    // LƯU Ý: Children có thể là bất cứ kiểu dữ liệu gì: string, function, class...   
                // từ 2 children trở lên thì sẽ là ARRAY children
                // 1 khi children là ARRAY thì mỗi children phải có 1 prop KEY riêng - là quy định
    // BT:
        const postItem = React.createElement('div', { class: 'post-item',}, 
            React.createElement('h2', { 
                title: 'Học ReactJS tại F8',
            }, 'Học ReactJS'),
            React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
        )
            console.log(postItem)

// 2. React-DOM: để render element ra view
    ReactDOM.render(postItem, document.getElementById('root'))    
                    // postItem: là react element
                    // document.getElementById('root') là div muốn render
            
// 3. JSX: JavaScript XML ( HTML là cú pháp mở rộng của XML - XML không phải là HTML)
    //JSX: để giúp viết XML, HTML trong JavaScript( viết trong thẻ script)
    //Cần phả có JavaScript, thư viện Babel để dùng JSX
    //vd:
        //a. code bằng react.createElement
        const h2 = React.createElement('h2',{
            className: 'h2',
            id: 'h2',
        }, 'Hi, Guys!' )
        ReactDOM.render(h2, document.getElementById('root'))

        //b. code bằng JSX - giống cú pháp html bình thường 
        const courses = [
            {
                name: 'HTML & CSS',
            },
            {
                name: 'Java',
            },
            {
                name: 'Ruby',
            },
        ]
        const ul = (
                    <ul>
                        {courses.map((course, index) => 
                            <li key={index}>{course.name}</li>
                        )}
                    </ul>
                )
        ReactDOM.render(ul, document.getElementById('root'))

    // LƯU Ý: khi render nhiều element thì cần bọc các element đó lại bằng <React.Fragment>
    //vd: 
         const jsx = (
            <React.fragment> //thẻ này không hiển thị trong DOM
                <h1>H1</h1>
                <h2>H2</h2>
            </React.fragment>
         )

//4. React elements types: gồm các kiểu DL: string, function, class...
    // tạo component bằng function - có thể dụng như 1 thẻ tag bình thường
    function Header(){
        return (
            <div className="header">Header</div>
        )
    }
    // tạo component bằng class - có thể dụng như 1 thẻ tag bình thường
    class Content extends React.Component {
        render() {
            return (
                <div className="content">Content</div>
            )
        }
    }

    // LƯU Ý: phải VIẾT HOA ALL CHỮ CÁI ĐẦU thì react mới nhận

    const app =  (
        <div className = 'wrapper'>
            <Header /> 
            <Content />
            <div className="footer">footer</div>
        </div>
    )

    ReactDOM.render(app, document.getElementById('root'))

//5. PROPS:

        // PROPS TRONG ELEMENT GIỐNG NHƯ ATTRIBUTE CỦA ELEMENT //
        // PROPS TRONG COMPONENT GIỐNG NHƯ THAM SỐ CỦA FUNCTION //

    //React elements
        // - Sử dụng props giống như với attribute của thẻ HTML
        // - 2 props class, for => className, htmlFor
        // - Phải tuân theo quy ước có sẵn
    // React components
        // - Sử dụng props giống như đối số cho Function
        // - Tự do đặt tên props
        // - Đặt theo camelCase - từ chữ thứ 2 viết hoa chữ đầu
        // - *Có thể bao gồm dấu gạch ngang - ít dùng

    // - Chú ý:
        // - Prop "key" là prop đặc biệt - KHÔNG phải là PROP
        // - Props cơ bản là đối số của Component → Props có thể là bất cứ kiểu dữ liệu gì
            //có thể truyền: Array, object, function( nếu là function thì chính là callback)
        // - Sử dụng destructuring - để có thể đặt được giá trị default cho prop
    
    //vd: 3 file (imports - exports)
    //postitem.js - file tạo components
    function PostItem(props){
        //gọi callback: props.callback()
        return (
            <div className="post-item">
                <img className='post-image' src={props.image} />
                <h2 className = 'post-title' onClick = {() => props.onClick(props)}>{props.title}</h2>
                <p className='post-description'>{props.description}</p>
            </div>
        )
    }
    //app.js - chứa content web
    function App(){
        function handleClick(props){
            console.log(props.title)
        }
        return (
            <div className="wrapper">
                <PostItem
                    title = 'Kiến Thức Nhập Môn IT'
                    image = 'https://files.fullstack.edu.vn/f8-prod/courses/7.png'
                    description = 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.'
                    onClick = { handleClick }
                />
                <PostItem
                    title = '1 Kiến Thức Nhập Môn IT'
                    image = 'https://files.fullstack.edu.vn/f8-prod/courses/7.png'
                    description = '1 Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.'
                    onClick = { handleClick }
                />
            </div>
        )
    }
    //index.js - để render ra view
    ReactDOM.render(<App />, document.getElementById('root'))

//6. ReactDOM events:
    //syntax: on + tên DOM event VIẾT HOA chữ cái đầu
    //vd: onClick, onDoubleClick, ...
        function App(){
            return (
                <div className="wrapper">
                    <button onClick={(event) => (alert(event.target))}>
                        Click me!
                    </button>
                </div>
            )   
        }

//7. Component example
    //OBJECT: các phương thức của object có thể làm component
        const Form = {
            Input(){
                return <input />
            },

            Checkbox(){
                return <input type = 'checkbox' />
            }
        }
        //app.js
        function App(){
            // const type = 'Input'
            const type = 'Checkbox' //gọi phương thức theo type (Form[type])
            const Component = Form[type] //gán phương thức cho biến để dùng như component
            return (
                <Component /> //không thể dùng Form[type] để làm component vì có dấu []
            )   
        }
        //index.js
        ReactDOM.render(<App />, document.getElementById('root'))

    //Tạo 1 component: khi sử dụng nếu truyền vào có href thì component sẽ là thẻ a
                        //khi truyền vào không có href thì sẽ là button
        function Button({title, href, onClick}){
            let Component = "button" //type của element mặc định là button
            let props = {} //tạo object props để lưu các props nếu có
            if(href){
                Component = 'a' //nếu có truyền href thì đổi type thành a
                props.href = href //thêm href vào props
            }
            if(onClick){
                props.onClick = onClick //nếu có onClick thì thêm onClick vào props
            }
            return <Component {...props}>{title}</Component>
                //Component: tên thẻ thay đổi theo biến Component
                //dùng spread để giải các props (nếu có) vào làm props
        }

        //app.js
        function App(){
            return (
            <div className= 'wrapper'>
                <Button
                    title= 'Click me!'
                    href="https://youtu.be/5SU6P-cqoJw" //truyền href cho thẻ a
                    onClick = {() => { console.log(Math.round(Math.random() * 100))}} //truyền callback cho button
                />
            </div>
            )   
        }
        //index.js
        ReactDOM.render(<App />, document.getElementById('root'))

    //Các kiểu DL: boolean, null, undefined sẽ không được render - vì để có thể sử dụng toán tử logic
        function App(){
            return (
                <div className="wrapper">
                    {true}
                    {/* {false} {undefined} {null} - không được render ra view */}
                </div>
                
            )   
        }

    //Có thể kết hợp toán tử logic để render theo điều kiện
        function App(){
            let firstAccess = true
            return (
                <div className="wrapper">
                    <h1> { firstAccess && 'Wellcom to F8'} </h1>
                        {/* nếu có firstAccess(true) thì sẽ render h1 */}
                </div>
                //TOÁN TỬ LOGIC:
                    // true && 'string' - nếu true thì lấy vế sau
                    // false && 'string' - nếu false thì KHÔNG lấy vế sau
            )   
        }

    //Dùng ...REST, ...SPREAD
        function Input({label, ...inputProps}){ //nếu có nhiều props chung thì có thể dùng ...rest
            return (
                <div>
                    <label>{label}</label>   
                    <input {...inputProps} />  // dùng ...spread để giải all các props vào
                </div>
            )
        }
        //app.js
        function App(){
            return (
            <Input
                label= 'Fullname: '
                type = 'text'
                placeholder = 'Enter full name'
                onFocus = {() => { console.log(Math.round(Math.random() * 100))}} 
            />
            )   
        }
        //index.js
        ReactDOM.render(<App />, document.getElementById('root'))



//################################################################################################//



//8. HOOK: là các hàm đặc biệt của React dùng trong các function components 
    //a. useState: quản lí các trạng thái trong component
        //vd:
        import { useState } from 'react'; //import useState
        function App() {
            const [name, setName] = useState(''); //dùng destructuring lấy state và hàm cập nhật state từ hook
            return (
                <div className="App">
                    <input value={name} onChange={(e) => (setName(e.target.value))} type="text" />
                    <button onClick={() => setName('abc')}>change</button>
                </div>
            );
        }
    //syntax:
    const [state, setState] = useState(initialState)
    //state là giá trị hiện tại của state.
    //setState là một hàm để cập nhật giá trị của state.
    //useState(): chứa giá trị khởi tạo và gán cho biến state CHỈ trong LẦN ĐẦU chạy function component
                // từ lầ thứ 2 chạy function component thì biến state được hàm setState gán lại giá trị mới
    //vd:
    function App() {
        const [cars, setCars] = useState(['Bugatti', 'Roll-Royce', 'Maybach']);
        const handleUpdate = () => {
             setCars((prevState) => { //dùng callback để đảm bảo tính toàn vẹn của giá trị trước đó
                  return [...prevState, 'Lamborghini'] //...spread để lấy all giá trị trước và thêm giá trị mới
             })
        }
        console.log(cars) // Output: ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
        return (
            <div>
                <h1>ReactJS</h1>
                <button onClick={handleUpdate}>Update</button>
            </div>
        )
    }
    //GT: khi App() chạy lần đầu thì cars được gán giá trị từ useState(['Bugatti', 'Roll-Royce', 'Maybach'])
        //khởi tạo hàm handleUpdate và dùng setCars để gán giá trị mới cho cars thành ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
        //nhưng chỉ gán vì hàm handleUpdate chưa được gọi
        //App() sẽ return lại div để render ra view LẦN 1 với cars là ['Bugatti', 'Roll-Royce', 'Maybach']
        //khi click vào button update thì hàm handleUpdate chạy và gọi hàm setCars gán lại giá trị mới cho cars là ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
        //sau khi setCars chạy xong thì App() sẽ retturn để render lại
        //nên console.log(cars) // Output: ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']

    //LƯU Ý: một khi khi setState() chạy xong thì component sẽ return để render ra view

    //vd: bấm nút để chọn quà ngẫu nhiên
    const cars = ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
    function App() {
        const [gift, setGift] = useState();
        function handleClick() {
            const index = Math.floor(Math.random() * cars.length);
            setGift(() => {
                return cars[index];
            })
        }
        return (
            <div className="App">
                <p>{gift || 'Bạn chưa chọn quà.'}</p>
                <button onClick={handleClick}>Get Girf</button>
            </div>
        );
    }

    //vd: lấy value từ thẻ input để call API...
    function App() {
        const [name, setName] = useState(''); //dùng destructuring lấy state và hàm cập nhật state từ hook
        const [email, setEmail] = useState(''); //dùng destructuring lấy state và hàm cập nhật state từ hook
        function handleClick(){
          console.log({name, email})
          //đã lấy được value 2 ô input name, email bằng cách setState lại cho state(dùng onchange())
          //xử lí logic: gọi API...
        }
        return (
            <div className="App">
                <input onChange={(e) => (setName(e.target.value))} type="text" /> 
                <input onChange={(e) => (setEmail(e.target.value))} type="text" />
                <button onClick={handleClick}>Login</button>
            </div>
        );
      }

      //vd: lấy value radio để call API...
        const cars1 = [{id: 1,  name: 'Bugatti',},{id: 2, name: 'Lamborghini',},{id: 3, name: 'Maybach',}]
        function App() {
            const [checked, setChecked] = useState(); //dùng biến checked để lưu id tùng thẻ radio
                function handlsubmit(){
                    //call API
                    //checked đã chứa giá trị id của radio được checked
                    console.log({id: checked})    
                }
            return (
                <div className="App">
                    {cars1.map(car => (
                        <div key={car.id}>
                            <input type="radio"
                            //trạng thái check hay không check của radio
                            checked = {checked === car.id} //nếu giá trị checked(id) === id của car thì true(checked)
                            //set lại checked(set lại giá trị id) khi radio thay đổi
                            onChange={() => setChecked(car.id)} /> 
                            {car.name}
                        </div>
                    ))}
                    <button onClick={handlsubmit}>Submit</button>
                </div>
            )
        }

