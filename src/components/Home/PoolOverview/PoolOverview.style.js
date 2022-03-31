import styled from "styled-components";

const PoolOverviewWrapper = styled.div`
  .poolOverview {
    .title {
      span {
        color: ${(props) => props.theme.body.BodyPrimary};
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5715;
      }
    }

    .poolOverview_details {
      border-top: 1px solid ${(props) => props.theme.body.BodyLine};

      .poolOverview_card {
        padding: 1rem 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        span {
          color: ${(props) => props.theme.body.BodySecondary};
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          color: ${(props) => props.theme.body.BodyPrimary};
        }
      }
    }
  }

  @media only screen and (max-width: 769px) {
    .poolOverview {
      .poolOverview_details {
        border-top: none;
        .poolOverview_card {
          border: 1px solid ${(props) => props.theme.body.BodyLine};
        }
      }
    }
  }
`;

export default PoolOverviewWrapper;
