import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterContainer>
      <H3>Fund information</H3>
      <P>
        Interests in Future Super are issued by Diversa Trustees Limited (ABN 49
        006 421 638; AFSL 235153; RSE Licence L0000635) (“the Trustee”) as
        trustee of the Future Super Fund (ABN 45 960 194 277; RSE Registration
        R1072914) (“the Fund” or “Future Super”). The Fund is administered by
        OneVue Super Services Pty Limited (ABN 74 006 877 872; AFSL 246883).
        Insurance cover is provided to eligible members by AIA Australia Limited
        (ABN 79 004 837 861; AFSL 230043).
      </P>
      <P>
        The Founder, Promoter and Investment Manager of the Fund is Future Super
        Investment Services Pty Ltd (ABN 55 621 040 702; AFS Representative No.
        001271441), which is a Corporate Authorised Representative of Future
        Superannuation Holdings Pty Ltd (ABN 90 167 800 580; AFSL 482684). The
        Trustee does not in any way endorse, warrant or accept responsibility
        for any services provided by the Promoter in its own right or directly
        to members or prospective members.
      </P>
      <H3>Terms & conditions</H3>
      <P>
        Information provided is of a general nature only and we have not taken
        your personal financial objectives, situation or needs into account. We
        recommend you seek professional financial advice before making any
        financial decisions regarding Future Super. When considering financial
        returns, past performance is not a reliable indicator of future
        performance.
      </P>
      <P>
        You can also view our{" "}
        <Link
          onClick={() =>
            (window.location = "https://www.myfuturesuper.com.au/terms/")
          }
        >
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link
          onClick={() =>
            (window.location = "https://www.myfuturesuper.com.au/privacy/")
          }
        >
          Privacy Policy
        </Link>
        .
      </P>
      <P>
        We acknowledge the Traditional Owners of the land on which we work and
        live.
      </P>
      <P>
        We pay our respects to their Elders, past and present, and remember that
        sovereignty was never ceded.
      </P>
      <P>© 2020 Future Superannuation Group Pty Ltd</P>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #333333;
  padding: 10vw;
`;

const P = styled.p`
  color: #cccccc;
  font-size: calc(12px + 0.2vw);
`;

const H3 = styled.h3`
  color: #cccccc;
  font-weight: 800;
  font-size: calc(10px + 0.5vw);
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;
