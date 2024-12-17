import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

export const Section = styled.div`
  flex: 1;
  margin-right: 20px;

  h4 {
    margin-bottom: 15px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
`;

export const BlogSection = styled.div`
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 5px;

  h4 {
    margin-bottom: 15px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const BlogItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;

  div {
    margin-left: 10px;

    h5 {
      font-size: 0.9rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 5px;
      color: #666;
    }

    a {
      font-size: 0.8rem;
      color: #007bff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background: #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 8px 15px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
