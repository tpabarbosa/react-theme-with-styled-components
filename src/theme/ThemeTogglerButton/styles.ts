import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;
  margin: 1rem;

  .switch {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 1.5rem;
    margin: 0.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.background};
    -webkit-transition: 0.2s;
    transition: 0.2s;
    box-shadow: inset 0px 0px 4px 2px ${({ theme }) => theme.color};
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 7px;
    bottom: 5px;
    background-color: ${({ theme }) => theme.background};
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  /* input:checked + .slider {
    background-color: ${({ theme }) => theme.background};
  } */

  input:checked + .slider:before {
    -webkit-transform: translateX(35px);
    -ms-transform: translateX(35px);
    transform: translateX(35px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider:hover {
    background-color: ${({ theme }) => theme.backgroundTwo};
  }

`;

export const Icons = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 25%;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.color};
    z-index: 11;
  }
`;

export const Icon = styled.span`
  height: 22px;
  margin-left: ${({ theme }) => theme.name === 'dark' ? '43px' : '6.3px'};
  z-index: 2;
`
