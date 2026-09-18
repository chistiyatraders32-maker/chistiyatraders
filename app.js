
async function loadProducts(){
 const {data}=await supabase.from('products').select('*').order('id',{ascending:false});
 const grid=document.getElementById('productGrid'); grid.innerHTML='';
 (data||[]).forEach(p=>grid.innerHTML+=`<div class="card"><img src="${p.image||'https://via.placeholder.com/400x300?text=CTC'}"><h3>${p.title}</h3><p>${p.description||''}</p><a class="whatsapp-btn" href="https://wa.me/916392013601?text=I'm%20interested%20in%20${encodeURIComponent(p.title)}">Enquire on WhatsApp</a></div>`);
}
loadProducts();
