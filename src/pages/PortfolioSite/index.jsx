import React, { useContext } from "react";
import TopDesc from "@components/TopDesc";
import InfoesContext from "../../stores/InfoesContext";
import Learn from "@components/Learn";
import CommonWrapper from "@components/CommonWrapper";
import CommonTitle from "@components/CommonTitle";
import CommonSub from "@components/CommonSub";
import CommonCodeBlock from "@components/CommonCodeBlock";

const PortfolioSite = () => {
  const cardInfoes = useContext(InfoesContext);
  const codes = [
    `export const light = {
    name: "light",
    bg: "#fff",
    ...
  };
  export const dark = {
    name: "dark",
    bg: "#1a0f24",
    ...
  };`,
    `function App() {
    const [theme, setTheme] = useState("light");
    return (
      <BrowserRouter>
        <ThemeContext.Provider
          value={{
            theme,
            setTheme,
          }}
        >
          <ThemeProvider theme={theme === "light" ? light : dark}>
            <GlobalStyle />
            <Navigation theme={theme}></Navigation>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio-site" element={<PortfolioSite />} />
            </Routes>
            <ToggleBtn theme={theme} setTheme={setTheme} />
          </ThemeProvider>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }`,
    `const ToggleBtn = ({ theme, setTheme }) => {
    const onClick = useCallback(() => {
      if (theme === "light") {
        setTheme("dark");
      } else if (theme === "dark") {
        setTheme("light");
      }
    }, [theme, setTheme]);
  
    return <Btn onClick={onClick}></Btn>;
  };`,
    `function App() {
    ...
    useEffect(() => {
      if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light");
      }
      if (localStorage.getItem("theme")) {
        setTheme(localStorage.getItem("theme"));
      }
    }, [theme]);
    ...`,
    `const ToggleBtn = ({ theme, setTheme }) => {
      const onClick = useCallback(() => {
        if (theme === "light") {
          setTheme("dark");
          localStorage.setItem("theme", "dark");
        } else if (theme === "dark") {
          setTheme("light");
          localStorage.setItem("theme", "light");
        }
      }, [theme, setTheme]);
    
      return <Btn onClick={onClick}></Btn>;
    };`,
  ];

  return (
    <>
      <TopDesc cardInfo={cardInfoes[0]}></TopDesc>
      <Learn>What I learned - 다크모드</Learn>
      <div>
        <CommonWrapper>
          <CommonTitle>theme 설정</CommonTitle>
          <CommonSub>
            라이트 모드와 다크 모드에 사용될 색상을 설정해 놓습니다.
          </CommonSub>
          <CommonCodeBlock text={codes[0]} />
        </CommonWrapper>
        <CommonWrapper>
          <CommonTitle>
            ThemeProvider를 통해 전역적으로 theme 관리하기
          </CommonTitle>
          <CommonSub>
            context api 기반으로 만들어진 ThemeProvider를 활용하여 theme 정보를
            props 형태로 넘겨받아 사용할 수 있도록 합니다.
            <br />
            theme의 상태는 useState를 사용하여 관리합니다. theme이 "light"이면
            그 전에 설정한 light theme을 props로 전달하게 됩니다.
            <br />
          </CommonSub>
          <CommonCodeBlock text={codes[1]} />
        </CommonWrapper>
        <CommonWrapper>
          <CommonTitle>
            토글버튼을 활용하여 라이트모드, 다크모드 전환하기
          </CommonTitle>
          <CommonSub>
            useState로 생성한 theme, setTheme을 토글버튼에 props로 전달합니다.
            <br />
            theme이 "light"일 때 클릭하면 setTheme을 활용하여 theme을 "dark"로
            반대로 theme이 "dark"일 때 클릭하면 theme을 "light"로 전환되게
            설정해놓았습니다.
            <br />
          </CommonSub>
          <CommonCodeBlock text={codes[2]} />
        </CommonWrapper>
        <CommonWrapper>
          <CommonTitle>
            localStorage를 활용하여 브라우저가 종료되도 다크모드 상태 데이터
            저장하기
          </CommonTitle>
          <CommonSub>
            브라우저가 종료되도 그 전에 설정해놓은 다크모드 상태를
            localStorage에 저장해, 다음에 사용자가 사이트에 접근했을때도 그 전에
            설정해놓은 다크모드 상태가 유지되도록 합니다.
            <br />
            useEffect를 활용하여 렌더링 됬을 때 로컬스토리지에 다크모드 상태
            데이터가 없으면 "light"로 설정해놓고 그 전에 설정해놓은 값이 있다면
            그 값을 가져와 그대로 설정해 놓습니다.
          </CommonSub>
          <CommonCodeBlock text={codes[3]} />
          <CommonSub>
            토글버튼에서도 동일하게 다크모드 상태가 바뀔때마다 localStorage에도
            동일하게 데이터 값을 저장해놓습니다.
          </CommonSub>
          <CommonCodeBlock text={codes[3]} />
        </CommonWrapper>
      </div>
    </>
  );
};

export default PortfolioSite;
