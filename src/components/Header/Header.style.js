import styled from "styled-components";

const HeaderWrapper = styled.div`
  .first_navbar {
    background: inherit !important;
    border-bottom: 1px solid ${(props) => props.theme.body.BodyLine};

    nav {
      padding: 0px 4px 0px 16px;
      justify-content: inherit !important;

      .navbar-brand {
        flex-grow: 0 !important;

        img {
          height: 50px;
          width: auto;
        }
      }

      .left_ui_block_hide {
        li {
          padding-right: 80px;
        }
      }
    }
  }

  .second_navbar {
    background-image: url("/images/Dark.png");
    border-bottom: 2px solid ${(props) => props.theme.body.BodyLine};

    nav {
      padding: 18px 0px 0px 0px;
      justify-content: inherit !important;

      .second_navbar_block {
        .second_navbar_list {
          display: flex !important;

          li {
            padding-left: 0.7rem;
            padding-right: 0.7rem;

            .nav-link {
              position: relative;
              color: ${(props) => props.theme.body.BodyPrimary};
              font-weight: 500;
              font-size: 1.1rem;
              text-align: center;
              padding-bottom: 10px;
              transition: 450ms all;
            }

            .active {
              position: relative;
              color: ${(props) => props.theme.body.BodyBrand};
              transition: 450ms all;
              padding-bottom: 10px;
              text-decoration: none;

              &:before {
                content: "";
                position: absolute;
                left: 0px;
                bottom: 0;
                width: 100%;
                height: 3px;
                opacity: 1;
                background: ${(props) => props.theme.body.BodyBrand};
                transition: 450ms all;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    .first_navbar {
      nav {
        padding: 0px 4px 0px 0px;
        .navbar-brand {
          img {
            height: 50px;
            width: auto;
          }
        }

        .left_ui_block_hide {
          li {
            padding-right: 10px;
          }
        }
      }
    }

    .second_navbar {
      nav {
        .second_navbar_block {
          .second_navbar_list {
            li {
              padding-left: 0rem;
              padding-right: 0rem;
            }
          }
        }
      }
    }
  }
`;

export default HeaderWrapper;
