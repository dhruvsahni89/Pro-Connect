import styled from 'styled-components';

const Main=(props)=>{
    return <Container>
        <ShareBox>Share
        <div>
            <img src="/images/user.svg" alt="" />
            <button>start a post</button>
        </div>
        <div><button>
            <img src="/images/feed-icon.svg" alt="" />
            <span>Photo</span>
            </button>
            <button>
                <img src="/images/feed-icon.svg" alt="" />
                <span>Video</span>
            </button>
            <button>
                <img src="/images/feed-icon.svg" alt="" />
                <span>event</span>
            </button>
            <button>
                <img src="/images/feed-icon.svg" alt="" />
                <span>Write Article</span>
            </button>

            </div>
            </ShareBox>
    </Container>

    
}
const Container=styled.div`
grid-area:Main;
`;
const CommonCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0/20%);


`;
const ShareBox=styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
background:white;
div{
    button{
        outline:none;
        color:rgba(0,0,0,0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height:48px;
        background:transparent;
            border:none;
            display:flex;
            align-items:center;
            font-weight:600;
    }
    &:first-child{
    display:flex;
    align-items:center;
    padding:8px 16px 0px 16px;
    img{
        width:48px;
    }
    }
}
`;


export default Main;

