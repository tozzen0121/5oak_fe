import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Box, Modal, Stack } from '@mui/material';

// project-imports
import FormCustomerAdd from './FormCustomerAdd';
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';
import CircularWithPath from 'components/@extended/progress/CircularWithPath';

import { useGetCustomer } from 'api/customer';


import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { getImageUrl } from 'utils/getImageUrl';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs', 
    import.meta.url,
).toString();

// ==============================|| CUSTOMER ADD / EDIT ||============================== //

const PDFViewerModal = ({ open, modalToggler, customer, url }) => {

  const [ numPages, setNumPages ] = useState();
  const [ pageNumber, setPageNumber ] = useState(1);

  useEffect(() => {
    setPageNumber(1);
  }, [url])

  const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
  }

  const { customersLoading: loading } = useGetCustomer();

  const closeModal = () => modalToggler(false);

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-customer-add-label"
          aria-describedby="modal-customer-add-description"
          sx={{
            '& .MuiPaper-root:focus': {
              outline: 'none'
            }
          }}
        >
          <MainCard
            sx={{ width: `calc(100% - 48px)`, minWidth: 340, maxWidth: 1200, height: 'auto', maxHeight: 'calc(100vh - 48px)' }}
            modal
            content={false}
          >
            <SimpleBar
              sx={{
                maxHeight: `calc(100vh - 48px)`,
                '& .simplebar-content': {
                  display: 'flex',
                  flexDirection: 'column'
                }
              }}
            >
              {loading ? (
                <Box sx={{ p: 5 }}>
                  <Stack direction="row" justifyContent="center">
                    <CircularWithPath />
                  </Stack>
                </Box>
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', 
                  flexDirection: 'column', 
                  minHeight: 'calc(100vh - 48px)',
                }}>
                  <Document 
                      file={{ url: getImageUrl(url) }} 
                      onLoadSuccess={onDocumentLoadSuccess}
                  >
                      <Page pageNumber={pageNumber} />
                  </Document>
                  <div>
                    <p>Page {pageNumber} of {numPages}</p>
                    {pageNumber > 1 && (
                      <button onClick={() => setPageNumber((pre) => (pre - 1))}>Previous</button>
                    )}
                    {pageNumber < numPages && (
                      <button onClick={() => {
                        setPageNumber((pre) => pre + 1)
                      }}>Next</button>
                    )}
                  </div>
                </div>
              )}
            </SimpleBar>
          </MainCard>
        </Modal>
      )}
    </>
  );
};

PDFViewerModal.propTypes = {
  open: PropTypes.bool,
  modalToggler: PropTypes.func,
  customer: PropTypes.object
};

export default PDFViewerModal;
