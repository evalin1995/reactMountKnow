import { Route, Routes } from 'react-router-dom';
import About from './About';
import News from './News';
import Navbar from '../components/Navbar';
import Quizbox from '../components/Quizbox';
import Footer from '../components/Footer';

export default function Quiz() {

  // Generate random positions and rotations when the component mounts

  const Contour = () => (
    <svg className='quiz-bg' width="424" height="452" fill="currentColor" viewBox="0 0 424 452">
      <use xlinkHref="#quiz-bg" />
    </svg>
  );
  return (
    <>
      {/* header#topbar>(a.logo>img)+nav.navigation>ul>(li>((a{Explore}>span{探索})+p))*5 */}
      <Navbar />
      <div >
        <header id="quiz-banner" className='banner justFC'>
          <h1 className="heading center">Qu <span>i</span>z</h1>
        </header>
        <div className='wrapper alignC'>
          {/* 試卷區 */}

          <Quizbox />

          <Contour /><Contour />
          <Contour />

        </div>
      </div>
      <p style={{ display: 'none' }}>
        <svg id='quiz-bg' xmlns="http://www.w3.org/2000/svg" width="424" height="452" fill="currentColor" viewBox="0 0 424 452">
          <path d="m99.914 0 1.544.008c36.084.393 122.798 8.197 148.583 71.972 4.361 10.79 7.147 23.461 8.767 39.871.161 1.642.203 3.774.247 6.029.079 4.209.192 9.971 1.27 12.537 1.793 4.264 3.875 5.327 7.02 6.935 2.067 1.057 4.412 2.255 6.911 4.487 3.196 2.856 5.651 5.699 8.028 8.447 5.178 5.994 9.268 10.727 18.738 12.803 4.762 1.04 9.427 1.208 13.937 1.366 6.748.241 13.724.489 21.102 3.612 1.858.786 4.388 1.676 7.068 2.616 8.503 2.989 19.089 6.709 23.459 12.224 2.848 3.597 3.218 8.084 3.542 12.042.238 2.905.466 5.649 1.578 7.632 1.066 1.898 3.051 3.455 5.156 5.104 1.674 1.312 3.402 2.669 4.925 4.366 2.655 2.953 7.131 6.662 11.873 10.589 16.038 13.287 38.005 31.486 26.826 50.295-4.086 6.882-29.449 19.645-36.082 20.619a24.088 24.088 0 0 1-3.505.245c-4.096 0-8.357-.916-12.478-1.8-4.051-.869-8.237-1.768-12.155-1.768-2.761 0-5.16.443-7.332 1.35-15.02 6.291-16.737 24.964-18.401 43.023-.813 8.834-1.582 17.178-3.925 23.845-3.607 10.257-2.345 15.106-.598 21.814 1.02 3.925 2.18 8.375 2.542 14.513.284 4.808-1.028 8.857-2.299 12.771-.811 2.497-1.576 4.855-1.894 7.315-.255 1.979-.069 4.227.126 6.61.288 3.492.583 7.103-.435 10.585-4.765 16.314-14.64 19.737-22.082 19.737-17.323 0-36.397-17.95-40.046-21.549-16.949-16.721-31.994-37.256-43.206-53.279-2.87-4.101-4.968-8.464-6.995-12.684-3.024-6.293-5.881-12.236-10.999-16.849-2.103-1.893-4.738-3.396-7.284-4.85-5.958-3.4-13.256-7.566-12.409-17.752-5.008-2.597-5.495-9.013-5.896-14.32-.359-4.744-.731-9.649-3.599-12.161-1.899-1.663-4.09-2.372-7.327-2.372-1.653 0-3.354.18-5.154.372-1.822.195-3.707.395-5.569.395-2.959 0-7.099-.443-10.594-3.92-4.236 1.015-8.813 1.122-13.256 1.224-3.983.094-7.747.182-11.185.874-2.725.547-5.605 1.801-8.652 3.131-4.633 2.018-9.425 4.106-14.56 4.106a17.49 17.49 0 0 1-3.022-.257l-1.252-.217-11.804-16.23c-2.008-2.272-3.417-4.155-4.552-5.674-3.193-4.274-3.77-5.045-11.275-5.35-2.474-.097-5.114.493-7.97 1.122-3.05.671-6.201 1.365-9.55 1.365-3.857 0-7.27-.945-10.428-2.885-3.734-2.294-5.06-5.306-6.123-7.724-.719-1.632-1.34-3.043-2.635-4.213-1.601-1.446-3.528-2.295-5.57-3.193-2.194-.966-4.68-2.059-6.92-4.013-9.523-8.309-11.722-16.47-7.59-28.17 2.765-7.828 8.598-15.306 14.773-23.224 9.165-11.748 18.638-23.896 16.85-36.605-.985-6.99-6.774-12.081-12.904-17.471-4.591-4.04-9.34-8.216-12.29-13.474-1.183-2.108-2.575-4.259-4.053-6.537-4.817-7.444-9.797-15.141-8.794-23.279 1.085-8.774 8.299-25.02 15.173-31.474 2.399-2.253 5.024-3.613 7.341-4.81 2.884-1.493 5.371-2.78 7.332-5.53 1.33-1.871 2.031-4.074 2.773-6.408.903-2.845 1.927-6.067 4.25-9.026 1.963-2.494 4.304-4.318 6.567-6.082 2.458-1.912 4.778-3.718 6.483-6.27 1.561-2.338 2.47-5.112 3.432-8.048.907-2.765 1.84-5.624 3.402-8.445C66.712 2.278 85.043 0 99.913 0ZM380.9 287.531c.93 0 1.779-.059 2.594-.178 5.914-.869 29.035-13.293 31.601-17.62 8.439-14.198-10.343-29.762-25.436-42.265-5.139-4.258-9.574-7.932-12.537-11.229-1.158-1.29-2.602-2.423-4.13-3.62-2.495-1.956-5.078-3.979-6.754-6.972-1.783-3.174-2.074-6.74-2.358-10.186-.278-3.369-.539-6.552-2.211-8.661-3.243-4.096-13.287-7.626-20.621-10.202-2.775-.974-5.396-1.896-7.436-2.757-6.309-2.671-12.414-2.89-18.878-3.12-4.788-.169-9.738-.345-15.055-1.511-11.511-2.518-16.675-8.498-22.142-14.828-2.243-2.598-4.565-5.283-7.457-7.87-1.896-1.693-3.691-2.609-5.589-3.58-3.571-1.825-7.266-3.712-9.947-10.084-1.545-3.676-1.66-9.612-1.762-14.847-.042-2.127-.08-4.138-.218-5.534-1.557-15.8-4.209-27.916-8.338-38.136-24.372-60.28-108.012-67.675-142.84-68.053l-1.473-.008c-13.97 0-29.353 1.996-37.547 16.809-1.273 2.303-2.078 4.76-2.93 7.36-1.05 3.21-2.136 6.529-4.176 9.582-2.265 3.394-5.1 5.601-7.841 7.735-2.056 1.603-4.002 3.116-5.488 5.007-1.624 2.067-2.395 4.49-3.208 7.052-.855 2.692-1.739 5.477-3.64 8.146-2.839 3.983-6.406 5.83-9.556 7.459-2.142 1.11-4.167 2.157-5.933 3.814-5.617 5.273-12.328 20.301-13.241 27.668-.725 5.875 3.628 12.6 7.837 19.106 1.463 2.259 2.976 4.593 4.253 6.873 2.43 4.326 6.575 7.973 10.965 11.835 6.717 5.909 13.662 12.017 14.97 21.307 2.161 15.342-8.146 28.556-18.113 41.334-5.854 7.504-11.38 14.591-13.806 21.456-3.247 9.198-1.73 14.786 5.802 21.357 1.52 1.325 3.367 2.138 5.323 2.999 2.297 1.009 4.898 2.157 7.25 4.28 2.29 2.071 3.287 4.339 4.169 6.341.928 2.111 1.6 3.636 3.666 4.907 2.173 1.335 4.445 1.956 7.147 1.956 2.667 0 5.356-.591 8.2-1.218 3.117-.688 6.37-1.392 9.572-1.263 10.086.41 12.093 2.573 16.044 7.86 1.14 1.526 2.431 3.254 4.318 5.38l.193.238 10.342 14.222c4.038.259 8.301-1.595 12.809-3.561 3.214-1.403 6.54-2.851 9.919-3.53 3.975-.801 8.196-.899 12.276-.993 4.928-.115 9.586-.224 13.501-1.49l2.135-.692 1.344 1.802c1.647 2.211 3.614 3.074 7.014 3.074 1.53 0 3.17-.176 4.907-.36 1.883-.2 3.833-.407 5.816-.407 2.995 0 7.44.405 11.457 3.925 4.796 4.198 5.285 10.683 5.72 16.403.522 6.905 1.095 9.129 3.661 9.582l3.173.56-.646 3.156c-1.526 7.421 2.029 9.835 8.974 13.8 2.836 1.619 5.768 3.293 8.372 5.638 6.038 5.438 9.298 12.226 12.452 18.79 1.92 3.994 3.904 8.124 6.482 11.806 11.06 15.804 25.884 36.045 42.473 52.41 9.231 9.108 24.107 19.744 35.643 19.744 7.816 0 13.073-4.981 16.067-15.227.692-2.368.456-5.256.205-8.314-.215-2.602-.435-5.292-.094-7.927.393-3.039 1.283-5.787 2.146-8.447 1.139-3.517 2.218-6.838 2.005-10.468-.326-5.526-1.355-9.48-2.351-13.305-1.873-7.195-3.491-13.41.75-25.471 2.086-5.933 2.821-13.902 3.596-22.341 1.748-18.976 3.727-40.483 22.224-48.231 2.953-1.237 6.143-1.837 9.752-1.837 4.583 0 9.099.97 13.469 1.909 3.977.854 7.735 1.661 11.164 1.661Z" />
          <path d="M117.634 17.618h.006c28.08.002 63.334 10.62 77.414 20.15 20.472 13.854 32.226 29.326 36.991 48.689.558 2.263.992 4.583 1.412 6.83.625 3.343 1.271 6.798 2.339 10.164.405 1.282 1.365 2.247 2.382 3.271 1.3 1.308 2.776 2.794 3.311 5.179.487 2.18-.167 4.232-.746 6.044-.473 1.479-.916 2.876-.732 4.171.535 3.735 2.222 6.776 3.85 9.718 1.482 2.673 2.882 5.198 3.283 8.015.497 3.475-.89 6.93-2.232 10.272-.945 2.351-1.839 4.572-2.069 6.706-.815 7.543.539 13.329 4.136 17.691 7.277 8.826 22.64 10.119 36.19 11.262 2.101.176 4.159.352 6.141.548 26.512 2.637 41.54 11.519 63.319 29.21 4.04 3.282 39.041 32.617 24.132 51.919-3.091 4.003-6.863 5.785-12.232 5.785-2.09 0-4.255-.263-6.349-.516-2.101-.255-4.274-.518-6.374-.518-2.08.002-3.875.261-5.488.798-9.15 3.043-14.665 12.753-16.776 20.824-3.4 13.007-6.55 25.764-9.595 38.101-1.981 8.023-3.966 16.069-6.044 24.278-.25.995-.625 3.3-1.099 6.219-2.537 15.605-7.816 48.076-19.323 48.076-2.999 0-5.992-2.082-9.15-6.357l-22.372-11.188-.157-.307c-1.279-2.526-3.636-5.089-6.131-7.799-3.171-3.449-6.448-7.012-7.593-10.757-1.803-5.906-.042-11.055 1.664-16.034 1.061-3.101 2.065-6.031 2.267-9.141.993-15.168-9.229-17.174-21.064-19.496-2.944-.577-5.989-1.175-8.903-2-11.883-3.369-14.579-4.964-18.796-15.67-1.179-2.985-1.699-5.284-2.117-7.133-.918-4.05-1.375-6.084-7.265-10.197-7.632-5.331-17.438-7.791-26.917-10.169-5.225-1.31-10.159-2.55-14.648-4.228l-.441-.165c-9.19-3.438-15.261-5.707-23.892-5.707-2.629 0-5.442.206-8.602.633-3.404.46-6.155 1.13-8.579 1.722-2.857.698-5.327 1.3-7.87 1.3-3.848 0-7.472-1.386-12.118-4.636-2.57-1.797-3.903-3.446-5.078-4.905-1.676-2.075-2.884-3.575-7.154-4.645-2.965-.749-5.992.259-8.771 1.312-1.996.757-4.058 1.54-6.213 1.574l-.631.004c-11.927 0-14.799-5.212-18.437-11.81-1.204-2.184-2.45-4.441-4.16-6.773-1.872-2.554-3.746-4.696-5.4-6.588-5.86-6.7-10.092-11.542-5.89-25.095 4.25-13.718 12.858-17.415 24.773-22.529l.888-.38c2.226-.958 4.915-1.871 7.762-2.836 9.617-3.261 21.584-7.319 21.944-15.716.449-10.418-7.083-13.472-15.056-16.705-3.891-1.58-7.919-3.21-10.759-5.778-4.627-4.18-4.493-6.713-4.355-9.394.094-1.829.192-3.718-1.338-6.636-1.427-2.723-4.42-5.626-7.314-8.435-1.375-1.335-2.675-2.593-3.79-3.816l-.453-.495c-7.542-8.268-14.667-16.075-8.426-27.597 1.014-1.875 11.095-13.33 13.48-15.32 4.213-3.512 7.201-3.83 10.368-4.168 1.928-.205 3.922-.416 6.382-1.428 12.686-5.203 12.22-8.938 11.198-17.12-.354-2.825-.755-6.03-.734-9.927.115-19.858 15.332-30.351 44.001-30.351Zm246.893 253.53c4.721 0 7.883-1.486 10.579-4.972 13.697-17.732-19.919-45.868-23.798-49.018-21.448-17.423-36.228-26.167-62.21-28.753-1.968-.196-4.018-.367-6.108-.545-13.965-1.177-29.792-2.51-37.629-12.015-3.918-4.748-5.465-11.225-4.6-19.244.262-2.422 1.252-4.882 2.207-7.262 1.242-3.087 2.523-6.276 2.105-9.195-.347-2.435-1.657-4.799-3.041-7.298-1.64-2.962-3.503-6.318-4.092-10.433-.253-1.774.289-3.467.811-5.104.545-1.709 1.062-3.325.696-4.95-.401-1.796-1.542-2.945-2.752-4.164-1.146-1.153-2.331-2.344-2.891-4.108-1.105-3.49-1.766-7.012-2.401-10.414-.414-2.218-.842-4.508-1.386-6.715-4.635-18.83-16.117-33.908-36.134-47.455-13.829-9.36-48.542-19.79-76.241-19.791h-.006c-19.047 0-41.775 4.903-41.907 28.261-.02 3.764.37 6.895.717 9.656 1.051 8.42 1.687 13.502-12.48 19.314-2.734 1.12-4.975 1.359-6.954 1.572-2.963.316-5.525.587-9.25 3.693C45.41 84.17 35.582 95.44 34.78 96.92c-5.532 10.213.8 17.153 8.134 25.191l.453.497c1.073 1.177 2.347 2.414 3.7 3.725 3.011 2.923 6.13 5.947 7.71 8.963 1.792 3.425 1.671 5.802 1.57 7.714-.127 2.451-.219 4.221 3.67 7.735 2.569 2.319 6.247 3.812 10.145 5.392 7.906 3.205 16.87 6.838 16.36 18.731-.425 9.827-13.144 14.14-23.363 17.607-2.807.951-5.455 1.85-7.61 2.776l-.888.38c-11.398 4.895-19.636 8.431-23.601 21.227-3.856 12.439-.345 16.452 5.47 23.102 1.682 1.923 3.588 4.102 5.512 6.729 1.79 2.441 3.127 4.863 4.306 7.001 3.56 6.462 5.914 10.73 16.606 10.73l.597-.004c1.787-.028 3.593-.711 5.503-1.438 2.245-.851 4.569-1.733 7.223-1.733.942 0 1.885.117 2.802.345 4.945 1.242 6.487 3.15 8.27 5.361 1.141 1.412 2.32 2.875 4.648 4.503 4.27 2.985 7.534 4.258 10.922 4.258 2.292 0 4.535-.548 7.373-1.24 2.476-.604 5.281-1.289 8.796-1.764 3.254-.439 6.157-.652 8.882-.652 9.01-.002 15.221 2.322 24.623 5.839l.439.166c4.381 1.636 9.26 2.861 14.425 4.156 9.663 2.425 19.657 4.932 27.605 10.485 6.552 4.577 7.17 7.311 8.107 11.449.424 1.87.905 3.993 2.02 6.829 3.777 9.581 5.568 11.064 17.426 14.425 2.828.802 5.829 1.392 8.734 1.96 11.73 2.301 23.86 4.682 22.748 21.685-.219 3.385-1.317 6.585-2.376 9.68-1.672 4.88-3.248 9.488-1.641 14.749 1.003 3.289 4.119 6.677 7.131 9.952 2.389 2.597 4.855 5.279 6.295 7.96l22.217 11.11.149.207c2.752 3.785 5.314 5.703 7.611 5.703 9.729 0 15.2-33.653 17.26-46.322.502-3.085.866-5.313 1.139-6.395 2.074-8.205 4.059-16.245 6.04-24.266 3.047-12.345 6.197-25.11 9.603-38.13 2.249-8.602 8.195-18.97 18.136-22.278 1.831-.608 3.842-.905 6.149-.905 2.225 0 4.464.271 6.627.533 2.119.257 4.127.499 6.09.499Z" />
          <path d="M130.407 28.533c5.542 0 11.678.602 18.232 1.79 10.088 1.828 17.409 5.483 26.678 10.11 2.547 1.273 5.985 2.51 9.626 3.82 6.639 2.387 13.504 4.857 17.25 8.195 7.981 7.108 14.919 26.297 19.985 40.306 1.354 3.747 2.525 6.982 3.561 9.58 3.411 8.533 3.317 17.885 3.227 26.928-.021 2.175-.044 4.357-.019 6.539.059 5.375 1.419 11.321 2.736 17.072 1.565 6.849 3.045 13.319 2.514 18.951-.445 4.73-2.052 8.201-3.469 11.263-2.493 5.386-4.297 9.275 1.202 17.233 5.331 7.714 10.911 8.343 17.126 8.343 1.208 0 2.462-.031 3.766-.063 2.548-.06 5.279-.127 8.264.011 8.487.393 15.413 2.825 22.113 5.176 4.587 1.612 9.331 3.277 14.564 4.285 3.25.627 6.393.999 9.432 1.356 10.65 1.258 19.847 2.345 27.421 13.281 7.549 10.903 5.662 13.327.268 18.23-1.662 1.511-3.545 3.223-5.547 5.666-6.134 7.486-8.662 17.729-11.103 27.635l-.222.902c-1.703 6.901-2.537 14.843-3.417 23.25-1.737 16.573-3.532 33.71-12.332 45.031-4.586 5.898-12.517 10.017-19.29 10.017-5.482 0-9.806-2.508-12.506-7.252-1.475-2.593-1.532-6.052-1.588-9.4-.05-3.047-.103-6.199-1.212-8.583-2.377-5.102-5.917-7.783-10.019-10.884l-1.116-.849c-6.433-4.907-13.378-9.193-20.095-13.34-9.335-5.764-18.152-11.206-25.58-18.109-6.021-5.596-10.366-7.017-15.868-8.817-3.081-1.007-6.571-2.148-10.774-4.213-3.373-1.655-6.322-4.123-9.174-6.508-4.713-3.941-9.164-7.664-15.146-7.664l-.576.007-18.594-12.922c-4.253-5.106-8.174-5.519-12.717-5.996-2.736-.286-5.833-.612-9.212-2.038-4.201-1.772-7.204-4.528-10.111-7.197-3.48-3.194-6.765-6.209-12.049-7.814-2.727-.828-5.467-1.166-8.119-1.492-6.428-.79-12.5-1.539-16.529-9.045-6.221-11.591.504-15.691 7.626-20.034 1.842-1.122 3.745-2.282 5.553-3.624 18.015-13.375 24.912-22.684 15.386-39.392-2.813-4.932-8.953-8.644-15.455-12.573-9.97-6.025-21.237-12.832-20.165-25.505-6.546-1.076-8.698-5.611-8.493-9.641.305-6.021 5.86-12.518 14.303-12.518.875 0 1.774.069 2.67.209 4.935.758 8.987 2.123 12.563 3.327 4.357 1.465 8.121 2.734 12.53 2.734 3.357 0 6.891-.77 10.774-2.35a376.953 376.953 0 0 0-3.089-5.715C98.3 81.819 87.489 62.064 94.958 46.502c5.72-11.922 17.647-17.969 35.449-17.969Zm118.647 182.22c-6.566 0-12.947-.707-18.844-9.244-6.178-8.938-3.957-13.741-1.382-19.298 1.415-3.051 2.876-6.207 3.285-10.581.5-5.298-.942-11.609-2.472-18.291-1.339-5.858-2.723-11.914-2.786-17.513-.025-2.198-.002-4.395.019-6.583.092-9.248.18-17.981-3.076-26.132-1.053-2.631-2.226-5.88-3.589-9.645-4.99-13.8-11.822-32.698-19.41-39.457-3.44-3.066-10.412-5.574-16.565-7.789-3.701-1.331-7.195-2.587-9.822-3.9-9.15-4.568-16.354-8.163-26.147-9.94-6.43-1.165-12.441-1.757-17.86-1.757-16.928 0-28.222 5.647-33.568 16.788-7.007 14.592 3.505 33.804 11.181 47.832 1.31 2.393 2.552 4.658 3.632 6.763l.51.99-1.02.445c-4.562 1.992-8.696 2.96-12.641 2.96-4.753 0-8.855-1.382-13.2-2.843-3.666-1.233-7.455-2.507-12.214-3.241a15.41 15.41 0 0 0-2.353-.184c-7.216-.002-11.96 5.467-12.217 10.535-.213 4.247 2.65 7.087 7.663 7.595l1.075.108-.144 1.07c-1.61 11.988 8.898 18.339 19.061 24.481 6.742 4.074 13.11 7.921 16.191 13.323 11.224 19.696-.05 30.295-15.959 42.105-1.883 1.399-3.828 2.586-5.71 3.733-7.322 4.464-12.158 7.413-6.873 17.26 3.517 6.552 8.813 7.204 14.943 7.959 2.74.336 5.572.685 8.472 1.565 5.737 1.745 9.355 5.064 12.851 8.276 2.903 2.665 5.645 5.181 9.511 6.811 3.091 1.304 5.902 1.601 8.619 1.885 4.756.499 9.25.972 14.01 6.627l17.723 12.272c6.708.027 11.644 4.157 16.422 8.15 2.756 2.308 5.609 4.692 8.754 6.237 4.072 2 7.34 3.068 10.5 4.1 5.519 1.804 10.284 3.363 16.644 9.273 7.275 6.763 16.008 12.155 25.254 17.86 6.759 4.173 13.749 8.487 20.264 13.457l1.109.842c4.145 3.135 8.057 6.096 10.653 11.668 1.297 2.788 1.354 6.165 1.408 9.431.052 3.227.105 6.274 1.315 8.402 2.915 5.12 7.421 6.194 10.689 6.194 6.17 0 13.424-3.787 17.639-9.21 8.433-10.848 10.199-27.683 11.902-43.965.888-8.481 1.728-16.491 3.467-23.532l.222-.901c2.382-9.659 5.084-20.606 11.517-28.458 2.1-2.562 4.13-4.405 5.758-5.887 4.786-4.349 6.228-5.661-.579-15.494-7.037-10.161-15.802-11.196-25.948-12.395-3.077-.364-6.257-.74-9.582-1.38-5.384-1.036-10.203-2.729-14.859-4.366-6.86-2.407-13.338-4.683-21.52-5.059-2.924-.134-5.618-.069-8.115-.011-1.313.028-2.581.059-3.808.059Z" />
          <path d="M138.349 39.825h.004c6.147 0 12.504 1.237 17.443 3.39l3.82 1.653c18.27 7.877 37.162 16.02 44.278 37.601 1.096 3.323 1.01 6.838.928 10.234-.069 2.824-.133 5.486.418 8.059.638 2.978 1.996 5.68 3.311 8.297 1.323 2.633 2.691 5.356 3.375 8.411 2.121 9.501 2.106 23.48-.038 32.525-1.264 5.33-3.243 10.703-5.16 15.9-6.131 16.629-11.923 32.337 6.351 44.274 2.069 1.351 4.287 2.166 6.634 3.027 2.882 1.057 5.862 2.152 8.535 4.317 1.734 1.405 2.848 3.29 3.925 5.112 1.22 2.065 2.48 4.199 4.679 5.708 6 4.115 13.912 4.397 21.565 4.673 3.351.119 6.811.242 10.032.693 12.997 1.819 20.957 5.219 25.056 10.705 5.529 7.402 3.958 17.908 1.78 32.45l-.775 5.256c-2.761 18.938-5.148 35.294-18.044 35.294-4.949 0-11.102-2.5-18.803-7.643-10.897-7.273-22.431-13.921-33.587-20.349-7.293-4.203-14.836-8.548-22.146-13.037-4.652-2.857-9.436-6.738-14.5-10.847-11.172-9.065-22.725-18.439-34.782-18.602l-.255-.004-.225-.121-18.113-9.753c-7.466-3.16-21.543-14.575-25.543-24.488-1.404-3.479-1.544-6.583-.416-9.231 2.249-5.277 7.781-7.745 13.129-10.132 4.38-1.954 8.911-3.975 11.429-7.494 7.624-10.658 3.006-19.545-2.846-28.462-.984-1.499-2.633-3.361-4.383-5.333-5.745-6.485-13.613-15.365-7.017-22.189 2.7-2.794 8.507-2.94 14.658-3.093 6.243-.154 12.696-.317 16.117-3.116 5.072-4.15 7.532-8.355 7.528-12.855-.013-9.728-11.747-19.279-22.101-27.705-6.048-4.922-11.759-9.57-14.516-13.792-5.26-8.05-6.476-14.81-3.615-20.094 3.13-5.782 11.306-9.24 21.87-9.24Zm138.119 275.489c11.091 0 13.354-15.528 15.975-33.507l.779-5.263c2.101-14.042 3.618-24.186-1.387-30.89-3.743-5.008-11.265-8.149-23.672-9.886-3.114-.434-6.37-.551-9.817-.675-7.949-.284-16.171-.578-22.675-5.038-2.579-1.77-3.96-4.107-5.294-6.366-1.028-1.741-2-3.384-3.439-4.552-2.404-1.948-5.096-2.934-7.942-3.979-2.353-.863-4.788-1.758-7.056-3.239-19.667-12.847-13.314-30.08-7.17-46.745 1.894-5.141 3.854-10.456 5.089-15.659 2.077-8.776 2.092-22.354.029-31.585-.627-2.804-1.877-5.296-3.202-7.933-1.373-2.732-2.792-5.557-3.488-8.796-.601-2.813-.532-5.727-.463-8.546.081-3.369.158-6.552-.822-9.532-6.821-20.686-25.275-28.642-43.12-36.337l-3.831-1.657c-4.682-2.044-10.734-3.214-16.604-3.214h-.005c-9.784 0-17.272 3.045-20.033 8.144-2.468 4.558-1.279 10.6 3.53 17.958 2.576 3.948 8.167 8.498 14.085 13.313 10.713 8.719 22.855 18.602 22.87 29.323.008 5.095-2.784 9.965-8.295 14.475-3.973 3.254-10.792 3.425-17.385 3.59-5.71.142-11.104.278-13.209 2.458-5.249 5.434 1.589 13.149 7.083 19.35 1.797 2.032 3.499 3.95 4.564 5.572 6.017 9.17 11.19 19.103 2.799 30.826-2.847 3.979-7.641 6.117-12.276 8.186-5.21 2.324-10.132 4.52-12.059 9.041-.903 2.117-.756 4.685.431 7.628 3.805 9.429 17.273 20.322 24.51 23.386l17.977 9.674c12.688.303 24.966 10.267 35.81 19.064 5.012 4.064 9.741 7.904 14.276 10.687 7.286 4.475 14.816 8.813 22.097 13.01 11.185 6.443 22.75 13.108 33.701 20.42 7.344 4.909 13.116 7.294 17.639 7.294Z" />
          <path d="M159.553 57.852c15.948 0 23.846 13.896 28.947 26.003.955 2.265 1.935 4.478 2.903 6.664 5.588 12.619 10.863 24.54 8.272 39.892-.96 5.689-3.733 16.882-7.091 22.713-2.634 4.568-6.136 6.961-9.524 9.275-2.485 1.699-5.057 3.454-7.306 6.1-3.574 4.201-5.118 9.054-4.59 14.427.78 7.908 6.072 16.449 14.157 22.846 4.103 3.248 9.449 5.952 15.114 8.815 5.944 3.006 12.088 6.113 16.709 9.936 2.236 1.847 3.672 4.403 5.06 6.871 1.423 2.531 2.767 4.922 4.838 6.387 2.416 1.705 6.09 2.372 9.64 3.018 2.506.453 4.874.884 6.916 1.661 12.046 4.588 31.451 25.142 30.073 38.093-.436 4.111-3.147 9.346-13.567 10.94-1.584.243-3.21.366-4.834.366-15.551 0-29.927-10.987-42.615-20.679-2.794-2.136-5.434-4.153-8.004-5.992-3.068-2.195-8.005-5.06-13.722-8.379-13.888-8.058-31.123-18.062-33.606-25.672l-10.796-9.446c-4.868-2.105-7.499-4.529-8.042-7.407-.869-4.599 3.712-9.101 8.562-13.87 3.996-3.927 8.128-7.99 8.801-11.841 1.398-8.015-1.108-15.76-3.764-23.961-2.385-7.363-4.849-14.976-4.433-23.074l.054-1.071 1.066.08c11.181.842 18.21-1.124 21.453-5.994 5.875-8.819-1.262-25.898-8.161-42.414-5.465-13.09-10.629-25.449-8.811-32.995l.161-.657.671-.123a30.922 30.922 0 0 1 5.469-.512Zm95.717 231.921c1.519 0 3.037-.115 4.518-.34 7.309-1.121 11.279-4.18 11.804-9.098 1.264-11.904-17.524-31.649-28.738-35.919-1.862-.708-4.136-1.122-6.546-1.559-3.776-.685-7.678-1.394-10.472-3.366-2.46-1.737-3.983-4.448-5.457-7.068-1.293-2.303-2.633-4.686-4.568-6.287-4.441-3.672-10.483-6.727-16.322-9.68-5.507-2.784-11.198-5.664-15.468-9.041-8.52-6.742-14.104-15.818-14.938-24.282-.585-5.959 1.122-11.338 5.078-15.986 2.431-2.857 5.121-4.694 7.72-6.47 3.34-2.285 6.494-4.439 8.889-8.596 3.22-5.593 5.906-16.472 6.84-22.015 2.487-14.734-2.665-26.374-8.121-38.7a384.272 384.272 0 0 1-2.918-6.698c-4.848-11.514-12.303-24.726-27.02-24.726-1.415 0-2.895.123-4.403.361-1.206 6.979 3.68 18.676 8.844 31.035 7.112 17.027 14.466 34.628 7.971 44.377-3.593 5.396-10.801 7.68-22.262 6.997-.136 7.333 2.153 14.41 4.372 21.263 2.617 8.079 5.321 16.437 3.833 24.961-.788 4.512-5.162 8.813-9.392 12.972-4.244 4.174-8.635 8.491-7.973 11.994.404 2.14 2.746 4.138 6.962 5.939l.278.174 11.383 9.96.084.303c1.872 6.822 19.71 17.173 32.732 24.73 5.762 3.344 10.74 6.232 13.887 8.485 2.596 1.858 5.25 3.883 8.057 6.029 12.424 9.493 26.506 20.251 41.346 20.251Z" />
        </svg>
      </p>
      <Footer />
    </>
  )
}

