import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 820px;
`;

export const PodcastsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  width: 100%;
  margin: auto;
  justify-content: center;
  grid-gap: 20px;
`;

export const InputFilter = styled.input`
  height: 40px;
  max-width: 350px;
  width: 100%;
  padding: 4px 8px;
`;

export const Searcher = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 820px;
  margin-bottom: 40px;
`;

export const SearcherIndicator = styled.div`
  position: absolute;
  right: 0;
`;

export const BadgetPodcasts = styled.div`
  position: absolute;
  left: 0;
  padding: 0px 8px;
  background-color: #d5ce43;
  color: #272727;
  border-radius: 16px;
  margin-right: 16px;
`;
