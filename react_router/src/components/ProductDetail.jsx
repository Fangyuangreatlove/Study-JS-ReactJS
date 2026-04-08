import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px' }}>
      <h2>Chi tiết sản phẩm</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
        Product ID: {id}
      </p>
      
      <Link to="/products">
        <button style={{ marginTop: '10px', cursor: 'pointer' }}>Quay lại</button>
      </Link>
    </div>
  );
}