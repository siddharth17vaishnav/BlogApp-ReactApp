import React,{useState,useEffect}  from "react";
import {  Container } from '@material-ui/core';
import './styles/home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import fire from "./config/fire";
import profile from '../img/profile.png';
import {Link} from 'react-router-dom';

const Home =()=>{
    const[post,setPost]=useState('');
    const [data,setData]=useState([]);


    const handleChange=(e)=>{
            setPost(e.target.value);
    }

    const CreatePost =(e)=>{
        e.preventDefault();
            const postRef=fire.database().ref("Post");
            const posts={
                post,
                complete:false,
            };
            postRef.push(posts);
            
    }

    useEffect(()=>{
        const postRef=fire.database().ref("Post");
        postRef.on('value',(snapshot)=>{
            const data=snapshot.val();
            const datalist=[];
            for(let id in data){
                datalist.push(data[id]);
            }
            setData(datalist);
        })
    },[])

    return(
        <div>  
           <Container maxWidth="md" style={{paddingTop:'20px'}}>
           <Link to="/account">
          <div className="accountsection text-right" data-hover=" My Account">
              <span ><img  src={profile} alt="My Accounts" style={{width:'5%',paddingBottom:'10px'}} /></span>
          </div>
          </Link>
               <Card style={{border: '1px solid'}}>
                   <CardContent>
                       
           <div className="tweetbox">
            <form action="">
                <div className="tweetbox_input">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQEhAVFRUQFxIVFRcWFRUXFRgVFhcWGBUWFRUbHSggGBolGxoYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0gICUtLS0rLS0tLi0tLy0tLS0vLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOgA2QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABIEAACAQIDAwcHBwgKAwAAAAABAgADEQQSIQUxUQYTIkFhcYEHMnKRobHwFFJTkqLB0SMzQkNUYoLhFRYkNJSywtLi8XOzw//EABsBAAIDAQEBAAAAAAAAAAAAAAADAQQFAgYH/8QAMhEAAgECBAIIBQUBAQAAAAAAAAECAxEEEiExQVEFE2FxgZHR8BRSobHhFSIyQsEzI//aAAwDAQACEQMRAD8A7jKWW8qiAESYkQAmIiACUkXkyYAQNJMSIATEta+OpJ51RR2XufUNZZPt2kNwLeAA9pkpNnEqsI7tGXlJF5gzyh4UvW38pT/WFvoh9Y/hJyMX8TS5/R+hngLSqYFeUPGl6m/lPant6kd6keoj3wyslYik+P39DMRLOhtGi+6oO46H2y7JnI1NPVakyDEmBJSBaVRIgBMREAEiJMAKVW0m8mIAIiIAIiIAUu1pIkyIATKHqBRdiAB1nQSw2htRKXRHSfhw9I/dNcxWKeobu1+A6h3CdKNytVxMYaLVmaxe3lGlNc3adB6t59kxGJx1Wp5zm3AaD1DfLaI1RSKNStOe7PKsxFrWFz19xMmi1wbkGxIuN2hnpaJIrgIiIAIiIAVKl/j3T2o4t0tlYgDq3j1bjeeLNw+Pw6vGUyNzu+X+JncLt/qqL/Ev3iZmhWVxmVgR2TSZ6YfEOhzIxB9/eOucuC4D6eLkv5am7xMTs7bCvZXsrfZPdwPZMtFtWNCE4zV4kNIU3lUSDoREQAREQAiTEocHqgBVJiIAJgtrbXtenTOu4tw7F7e2TtvaVr0kOv6RHV2DtmAjIx4so4jEW/bHxZJkREYUUIiIAImsbb5eYHDkpnNZxoVpWYA8C5IUd1yeyaljfKliDcUcNTTgXZqh9Qyj3wHRw9SWyOqMbC50A3maRym8olCjenhrVqu7N+pU9rDz+5dO0Tm+2OUWLxWleuzL8wWWn9RbA+NzMdQKhhm3degPdoYFmnhEtZu5tnI3lFWO0xXxGJAWqrrVao4RMoBKKoNgLPawHFu2dewuKp1Bmp1EccUZWHrBnzrWILEqNCTbulNKoVYMpKsNzKSrDuI1gMq4ZTd728D6Sica2F5QsZQIWqflFPg5tUA7Km8/xXnTuT3KPDYxM1F+kts1NtKi946x2i4gUqlCdPV7czLxEQEiZjZW1itkqG46m6x2HsmHiQ0mdwnKDvE3oGTNb2NtLKRSc9E+aeB4Hs902SJaszVpVFUjdCRJiQMEiUoD1yuAESYiACY3bGP5pLDz23dg62l9UcKCx0ABJ7hNOxmJNRy569w4DqE6irsrYmrkjZbs8iZERHGYIiIAQxAFybAak9k47y15a1MUzUaDFMOLi40arxLHqQ9S9Y38BvflKxppbOqZTY1ilLwc9MeKhh4zikC9hKSf734CJKqSbAXPZIItoeqQXhERABERABPXB4qpSdatJyjobqymxH4jsOhnmqkmwFyeob4ZSDYixHUd8AOzciuWKYxebqZUxCjVdwqD51Me9erum2T5sB1uNCNQRvBG4g9Rm48leUe1qtVcNRrc5ffzqhwiDe7P51h2nXQSSjVwnGLsu07FEppggAE3IAubAXPWbDdKoFETY9h4/OObY9JRoeK/iJrkqpVGRgy6FTcSJK6G0qjpyubzE8MLXFRA4/SHqPWJ7xBrJp6oSLSYgSIkSYAYTlHibKKQ/S1PcN3t901+XO0cRzlVm6r2HcNB+Mto+KsjIrVM82wDERJFCIiAHLPK1tktVTBqejSAqVO12ByA9ym/8fZOfzJ8qsQamOxLn6aovgjZB7FExZMDYpRUYJFdJ8pBsDbjuiq5Zix3kk+uZ2vyMx6otQUecV1VugwJAIBsVNjfuBlnsnBouKpU8Yj06bNlfMGpnUELqbEDNlueF4pVoSTcXe19t9OwsOlNNKStfnt5mMibXyn5E18MTUpA1aO/QXqIP31G8fvDxAmpAwpVYVY5oO6IqU5U5ZZKzJJkAzO8jNpph8Yj1Lc3UDU3J3BWtZj2Bgt+y861W2Dg3N2wtEniaSX9dpWxON6iajKN0+N/PyLOHwnXRupWa4W/Jw2hVysGABtrY7vGTiKxdi53sSTbiZ2XG8mMFzVQJhKIYo4UimtwxU2I00N5xRToDGYbFKum0rWt9TjEYaVC13e5lOTuyxisTTw5qCnzl+kRm3AtYDiQDa87dsDYVDB0ubora9izHV3PFj924dU4ZsTEGniqFQHzKtI+GcX9lxPocy0ZGMbulfQiIiBREREAMzycxVmNI7m1XvG8er3TYpo9CqUYON6kGbrTcEAjcQCO4xU1qaOEneLjyK4iJwWxLTaFbLTYjfaw7zoLdsuKl7aTE8oGtSA+cw9QBP4SVucVJZYNmvki1tPg3+LymIjzHbuIiIECBEpY214QA4BymolMbiUO8V6x8GcsPYRLbZOBNevToD9a6qfR/SPgtz4TOeUHClcWavViFDX/AHl6LezKfGbD5MtgFQcbUFs4K0Qfmnzn8dw7L8ZUq4pRodauK07/AMP7HpKWFk63Uvhv3fk38ADQbhukOgYWIBHAi49UqieZPSEKoAAAsBoANwHZNe25yMwmJJbLzVQ73p2F+1l3N37+2bFE7hUlCWaLsxc6cZrLJXRyjaXk7xlMnmylYDgcj/VbT7UznJPbGMw4XC4zDV8g0SrzbNkHUrlQQV4Hq7t29xLVTHTqwyVEn9H78CtDBxpyzU219UFPXOE8o8AaGLrUbaK7FfQbpJ7CB4Tu00bylbANVBi6a3eiLVAN5p7ww4lTfwJ4Tro6sqdXK9paePD32kY+k507rda+HH32HO9k0i+IooP06tFfW6ifRdpwrkNg+cxiN+jRBqG3ZouvG5B8J3WlVuqneSF+Pjt4zeVRdY4ckn7+nmeXxlJ5I1G9Lte/r5dpXoO23x8GUGREYZzdxERAgTadh1c1BeKXX1bvYRNWmd5M1PPX0T67g+4Tia0LGFlapbmZxWvKpFoijUJmB5Tt+bHpn/LM9Ne5T+cnc3vE6huIxP8Ayfh90YWIiOMoRPOvfTfv1tfgeHbJo3t17za++19IE20uVyHFxbjJiBHcaljNj0cQyLWTMKTFgNwJAIs3FeI67CZ8C2g0tPPE4YioHA0J17Cd/hPWeWxMJU5ZJcNvXx0+3A99hK8K9PrYcd+/l4e9BAUnwlaU9de/v8err9R3Rzuot1fGnAEbxFZbfyHOV9IlERE4OxERABESDCwGCpbGoYd3aimXniGYDcLX0UdQ3m3aZs9BbIo4BfdLFcMXqAkdFbX7ewTJTf6OhOzqT42SPLdN1oNxow4Xbtwb4fe/eIiJpGCIlNTcbb7G086N77yRl1vfzr9vZAmx7TLcm2/KsOK+4iYmZTk5+e/hb3iRLYZQ/wCke82eIiINcTAcpx+bPpj/ACzPzDcpEvTU/NPsIP8AKdR3E4hXpP3xNdiIjjJEREAEREAIMtDoe6Xkt8Qut/CZnSdLNTU1/X7P82NvoKuoVpUn/Zad69VfyRRUqX+Pf7PVKYiYTbbuz1aSSshERIJEREAERK6C3PdO6cHUkoR3YurVjSg6ktkr++/bvLmmLASYietjFRSS4Hz6U3OTlLdtt97d2IiJJyIiIAJleTa/lSeCn3rMVM5yYp+e3oj3k/dOZbDsOr1EZ+JF4iTWJlltWjnouOAuPDX7peSYENXVjRIntjaGSoyfNOndvHsnjLBiNNaMREQAREQASl1uLfHfKokNJqz2JjJxalF2a1LNhbSRLqrTv3/G+WgM8zi8K6E7cHs/XtXoz3HR+Ojiqd9pLdf6ux++ZMgSYlUvEEyYkEwuCRMuqSWHt/lKaNK2p3z1m90fg3T/APSe72XL377PKdL9Iqs+ppP9q3fN+i+r22u0RE0zDBMREAEREAE2fYFLLRB63Jb7h7prKIWYKN7EAd5m7UaYVQo3KAB4TibLmDjeTlyKkW0qiIo0BERADAcpMN5tUei33H3j1TBzdsRRDqUO5haabiKJRyjb1P8A0Y2D0sZuLp5ZZlx+55gRETsqiIiACInhiMZSp+fURfSYD2GAHpVe1tL3P85g3rMHe2nSYEdWhMvn2vhTvrppwb8JQ+xMSWLLQchiWB33ub3veUOkqcskVle/Jm50FKKnNt8FxXP8Mop40dYt7Z6fKU+d7DKf6Cxf7O/qEf0Hi/2d/UJjfDy+V+TPS9fD5l5opfGL1XPsnhzxdgDuuNOrfLn+gsX+zv6hKqew8UCD8nfQg7h+MmNGSf8AF+TOZVYtWUl5r3uZNR8fjPQWHx4HullU2xhkbKayZhoQWGluPxuMqoYum/mVFf0WB909RKLWrR4FNR0R7xESCBERABESUUkgAXJsAO2AGV5O4bM5qHcm70j/AC94myy2wOGFOmEHVvPEnfLmIk7s16NPJBIRESBpEmJQ5tugBXMRtzAZ15xR0k39q8O8TLxJTsczgpxys0SJl9t7Nyk1UHRPnDgePdMFi8SlNGqObKoufwHad0cnfYyJwcJWZOJxCU1LuwVRvJ+NT2TWMdyx1tRp3/ef7lH4zAbY2pUxD5m0UeavUo+88TLWigvr77e2aFLCx/tqKlKxlcVyhxNQZTUyg78gy+3f7ZijxkuBcgbgTaRNCEIxVoqxVbbeonbuQm0OewFJibtTHNt3poL965T4ziM6J5JMfZq2GJ3haijtHRf2FPVKmPhmo35a/wCFzATy1bc9P99TpkRKXOkwzcKpi+UmP+T4StWvqiHL6Z0T7REyanSaF5Wcflw9LDg61nLH0af/ACK+qNoU+sqRjzYmvU6unKXZ9eBywSYiekuecMnhdvYmmLCpcfvjN7Tr7Zk8HyxYG1akCOKaH6pOvrE1mAtyBxtEVMPTlwGQqNaM6ZgsbTrLnpsGHtB4EbwZczmOExj0Kuek2619bhhoSrW3idD2Xj0r0xUXr0I61YbwZl1aOTVbFku5ndgYG35Zhv8AM7utpabI2bzhzMOgv2jw7uM2iVZy4F3C0L/vl4ExERZfEi8pQk75XACJMRACJMRACCJx3yl4tBifk1I9GmAzjq5xhcL3BSD/ABdk69XrKis7GwQFj3AXJnztjsW1aq9ZvOqsznszEm3cN3hLuCheTly+5SxsllS4nkolcpSVTZgtDHqO7ERE7FiZnkdtDmMdRe+hcK3ov0TfuuD4TDQZzKKknF8TqMnGSkuB9IRMXyb2h8owlGv1ugzemOi/2gZlJ5lpptM9MmpK6E4x5ScfzuPdQdKCqg7/ADm9rW/hnX8XiFp03qtotNWZu5QSfdPnvE4hqjtUbzqjM7d7Ek++aHRsLzc+St5/gzukaloKHN38vzY84iJsGQIiIAUOJsHIXGqmLSlUJFOuQh9L9A+J6P8AFMC26UAkag2I1BG8HqIletBSunxLNKWncfSNNAoAAsBoBK5jthY/5RhaNfrqorHsa3SHg1xMjPPNNaM307q6EiTECRIkxABEiTABESIAYDl1ihS2fXbioTv5xlQj1MZwmdi8q9S2AC/Pq019QZv9M4/NTBK1O/NmbjH+9LsKk3SqQu6TNSOxlS3YiIknJVTIBuYcgkkC1yZTEgk6j5JsfmoVcOTrScOvo1P+Sn603+cW8nO0OZx6Ano1w1M956S/aUDxnaZhY6GWs3z19frc3MDPNRXZp6fSxqnlK2hzWAZQda7LTHdfM/2VI8Zxqb35WMfmxFOgDpRQsfSqH7lUfWmiTSwMMtFduvvwM7HTzVmuWnvxKlIuCRcAgkQ5BYkCwJJA4X6pTEt21uVc2lhERJOSDKJ6GecVU4D6PE7D5K8Tn2fk+hqVE8GtU/1mbiotOd+Ryr+TxKfNem31lYf6Z0aYOIVqsjcw7vTiIkSYkcIiIAJSzWnzHQ27tBnVP6QxfTZV/vVfrIHz50h+RGPWqtI8oMWGc2W64vKxyl7B+fyk5VY2v1GduFt2B1EXvees+aV2htRnqImOxTGkWBHyyqrNlzeYrVAXNlY2UE6S6xTbWWq1NMfiqmVkTTGVAxLlFU81zucLndFzWtdhrrJydoHUfK8f7HT/APOv/rqzk0YzDbVdfytXEVVHTAbFc8AArnOF5xtLJUGbirLv0mO+S4jp+cOaRKj5qqqArqGS5ZhqwIsvnHhLdCsqcMu5TrYZ1J5kzKLukgS2xWxMcjFekxW35usHJ0QnIobM9s6Xyg2zC++RW2XikpGqajdBqiuFrBsoQU7szq5A1cLl3303m0t/Hw5FR9HS+ZF0R1cIlthNk4uoVJZwKiO4Y1Qd1GrWTMM10DimwDNYaHgYobDxzOEs4LMq9KsANWRc46V2p3dOmoK9Ia6w+PhyI/TZ/Mi5iY3FYPFU0zuXC3AuKobfmykhWJCtlbKxFmsbEyz+UP8ASP8AXaT8dDkw/TZ/MjYaFZkZai+cjKy96kEe0T6EwWLWrSSqvm1FVx3MAR758tfKH+kf67S6p7cxqqEXG4lVAsFXEVgoHAKGsB2Spi6qrJWVmi3hcPKi3d3TNl5R47n8XWrdTs2X0V6KfZAmOmBOJqfSP9dvxj5Q/wBI/wBdpajjYJJKL0Ksuj5ttuS1M9EwPyh/pG+u0fKH+kb67Sfjo/KyP02XzIz0AXNhvOg75gflD/SP9dpK4qoL2qVBcWNncXHA67ofHR+Vh+nT+ZG10sOiEFzfdcCxFrlWAv5xHWNCLgi8xzrYkXvYkX7phWxVQ76jm+urudTvO/fKeff57fXMW8Wm9mNjgpJbo7F5Gj0sV3Yf/wCs6bPlbC7UxNK/NYmtTzWzc3WqJe17XysL2ud/Ey5/rFj/ANvxf+Kr/wC+UK3/AKTc+fpYvUYZIKPve59QSJ81YLaW06vmY/EnW1jjKqk2tewNTXePXPb5RtbX+3YnQsP79U3rcEfnN9xaKydo0+jwbxafMH9Ysf8At+L/AMVX/wB8j+sWP/b8X/iq/wDvk9WwLHDVMrq9r5GVreiQbTp7eUXZpxQxZoYzOHzgZcLa/Mmja+bOFyknLmtck9cRGZUyDRsByjqUGqmmiflnL9LnARfOMpKOuZbOei1xcA2lwOWOIG6nS85H/XAEpVpVlzIKmVjmpqMxBbLcAiIhZAWuy9uNTanmFkp8wDkHTK0KtSsoF2A6TOVJOmU7jax86O3Kq1q1fKpbEc4GBNTKA97rkVgrqL6K4YdFdNIiFgLwcra4dagp0RUpAhKlqmZcwQPYF8pzZBvBtma1r6Wr7cbmXw60KKUqrF2RedI5whQKil6hKsuXSxtYsCCCYiFgParyhIQJSpKL0Eo1WbMWfLQqUSPPyhRzjEWAJIW+6xqTlZXDI4p0s9JUpo9ql1pqUJS2fKQSmpIv0msRcWRCwFrjttNUQpzVNM/NKzLzmYpRBFJDmciyg2uBc5VuTrfFxEkBERAgREQAREQAREQAREQAS4wtakoOeiXN9CKhSwtusFN9fjriJBJ7DEYbrwpOp/XNu6gej1Dr/wCpSK2HF/7OTwJqkaX6wBwiJNgLOIiBB//Z" alt="" />
                <input type="text" placeholder="What's happening?" onChange={handleChange} value={post} required/>
            </div>
            <button className="tweetbox_tweetbutton" onClick={CreatePost}>Post</button>
            </form>
        </div>
        </CardContent>
               </Card>
               <hr></hr>
               <div className="content">
                   <Card style={{border: '1px solid #FFF'}}>
                       <CardContent>
                           <div>
                           
                                   <>
                               
                                    {data.map((res,index)=>{
                                        return(
                                    <>
                                   
                               
                       <div className="tweetbox_input" >
                           <img src="data:image/jpeg;base64,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" alt="" />
                <h3 key={index}> {res.post}</h3>
                </div>
                
               
                </>
                )})}
                </>
                         
                            </div>
                       </CardContent>
                   </Card>
                   </div>
            </Container>           
        </div>
    )
}

export default Home;